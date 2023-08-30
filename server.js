const express = require('express')
const app = express()
// to load environment variables from env file onyl in development mode
if(process.env.NODE_ENV!=='production'){
    // load all variables from .env file to process.env
 require('dotenv').config()
}
require('dotenv').config()
const expressLayouts = require('express-ejs-layouts')
// import router from index.js to hook it with our server which listens
const indexRouter = require('./routes/index.js')
// set view engine( recall mvc[v-view]) in out case ejs
app.set('view engine','ejs')
// configure express to locate where the views(logic) will be comming from
app.set('views',__dirname+'/views')
//layout file enables avoiding duplication of common html layout e.g headers$footer
// configure express to locate where our layouts will be coming from
app.set('layout','layouts/layout')
//tell our express app we'll be using expressLayouts
app.use(expressLayouts)
//tell express where our pulib fill will be located(images,stylesheets,js...)
app.use(express.static('public'))
app.listen(process.env.PORT||3000)
// mount middleware function(s) to a certain path
app.use('/',indexRouter)
//connecting server to mongodb
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
// test if we are connected to database
const db  = mongoose.connection
// printing error in big red text on console
db.on('error',error=>console.error(error))
db.once('open',()=>console.log('connected to Mongoose'))