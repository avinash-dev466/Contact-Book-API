var express = require('express');
var usercontroller = require('../controller/user');
var router = express.Router();

/* GET home page. */

router.post('/signup',usercontroller.usercreate)
router.post('/login',usercontroller.userlogin)
router.get('/', usercontroller.sequre, usercontroller.alldata)
router.get('/:id',usercontroller.sequre,usercontroller.singleData)
router.delete('/:id',usercontroller.sequre,usercontroller.delete)
router.put('/:id',usercontroller.sequre,usercontroller.update)

module.exports = router;
