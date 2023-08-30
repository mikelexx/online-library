const express = require('express')
const router = express.Router()
router.get('/',(req,res)=>{
    res.render('index')
})
// exporting information from this file/exporting our middleware
module.exports = router