let ADMIN = require('../model/admin');
const bcrypt = require('bcrypt');


exports.admincreate = async function(req, res, next) {
  try {
    req.body.password = await bcrypt.hash(req.body.password,10)
    let admincreate = await ADMIN.create(req.body)

    res.status(201).json({
        status : "success ",
        message : "Admin Create Successfull",
        admincreate
    })
  } catch (error) {
    res.status(404).json({
        status : "Fali",
        message : "Admin Not Create",
    })  
  }
}

exports.adminlogin = async function(req, res, next) {
    try {
        let adminCheck = await ADMIN.findOne({email : req.body.email})
        if(!adminCheck){
            throw new Error("Admin Not Found") 
        }
        let passwordVerify = await bcrypt.compare(req.body.password,adminCheck.password)
        if(!passwordVerify){
            throw new Error("password invaild") 
        }
      res.status(201).json({
          status : "success ",
          message : "Admin login Successfull",
          adminCheck
      })
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message : error.message
      })
    }
  }