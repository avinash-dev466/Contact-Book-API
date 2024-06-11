var express = require('express');
var contactcontroller = require('../controller/contact');
var usercontroller = require('../controller/user');
var router = express.Router();

/* GET home page. */

router.post('/signup',usercontroller.sequre,contactcontroller.contactcreate)
router.get('/',usercontroller.sequre,contactcontroller.alldata)
router.get('/:id',usercontroller.sequre,contactcontroller.singleData)
router.delete('/:id',usercontroller.sequre,contactcontroller.delete)
router.put('/:id',usercontroller.sequre,contactcontroller.update)

module.exports = router;
