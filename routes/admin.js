var express = require('express');
var admincontroller = require('../controller/admin');
var router = express.Router();

/* GET home page. */

router.post('/signup',admincontroller.admincreate)
router.post('/login',admincontroller.adminlogin)

module.exports = router;
