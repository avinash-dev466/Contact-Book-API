let USER = require('../model/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


  exports.sequre = async function(req, res, next) {
    try {
      let token = req.headers.authorization
      if(!token){
        throw new Error('Please attech Token..! ')
      }
      
      var decoded = jwt.verify(token, 'DEMO');
      console.log(decoded);
      
      req.userID = decoded.id

      let userCheck = await USER.findById(decoded.id)
      if(!userCheck){
        throw new Error("User not found")
      }
      next()
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message: error.message,
      })
    }
  }

exports.usercreate = async function(req, res, next) {
  try {
    req.body.password = await bcrypt.hash(req.body.password,10)
    let usercreate = await USER.create(req.body)
    
    res.status(201).json({
        status : "success ",
        message : "User Create Successfull",
        usercreate
    })
  } catch (error) {
    res.status(404).json({
        status : "Fali",
        message: error.message,
    })
  }
}

exports.userlogin = async function(req, res, next) {
    try {
        let userCheck = await USER.findOne({email : req.body.email})
        if(!userCheck){
            throw new Error("User Not Found") 
        }
        let passwordVerify = await bcrypt.compare(req.body.password,userCheck.password)
        if(!passwordVerify){
            throw new Error("password invaild") 
        }
      var token = jwt.sign({ id: userCheck._id }, 'DEMO');  
      res.status(201).json({
          status : "success ",
          message : "User login Successfull",
          userCheck,
          token
      })
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message : error.message
      })
    }
  }

  exports.alldata = async function(req, res, next) {
    try {
      
      let userfind = await USER.find()
    
      res.status(201).json({
          status : "success ",
          message : "User Found Successfull",
          userfind
      })
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message: error.message,
      })
    }
  }
  
  exports.singleData = async function(req, res, next) {
    try {
      let userfind = await USER.findOne(req.params.id)
      res.status(201).json({
          status : "Success",
          message : "User Found SuccessFull",
          userfind,
      })
  } catch (error) {
      res.status(404).json({
          status : "Fail",
          message : error.message
      })
  } 
}

  exports.delete = async function(req, res, next) {
    try {
     
      await USER.findByIdAndDelete(req.params.id)
  
      res.status(201).json({
          status : "success ",
          message : "User Delete Successfull",
      })
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message: error.message,
      })
    }
  }
  
  exports.update = async function(req, res, next) {
    try {
    req.body.password = await bcrypt.hash(req.body.password,10)
    let data = await USER.findByIdAndUpdate(req.params.id,req.body,{new : true})
  
      res.status(201).json({
          status : "success ",
          message : "User Update Successfull",
          data : data
      })
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message: error.message,
      })
    }
  }