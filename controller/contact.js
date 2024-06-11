let CONTACT = require('../model/contact');


exports.contactcreate = async function(req, res, next) {
    try {
      req.body.userID = req.userID
      let contactCreate = await CONTACT.create(req.body)
  
      res.status(201).json({
          status : "success ",
          message : "contact Create Successfull",
          contactCreate
      })
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message: error.message
      })
    }
  }

  exports.alldata = async function(req, res, next) {
    try {
      let contactCheck = await CONTACT.find({userID : req.userID}).populate('userID')
      
      res.status(200).json({
        status: "success",
        message: "contact found successfull",
        contactCheck
    })
} catch (error) {
        res.status(404).json({
        status: "fail",
        message: error.message
      })
    }
  }

    
  exports.singleData = async function(req, res, next) {
    try {
     
      let contactfind = await CONTACT.findById(req.params.id)
  
      res.status(201).json({
          status : "success",
          message : "contact Found Successfull",
          contactfind
      })
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message: error.message,
      })
    }
  }

  exports.delete = async function(req, res, next) {
    try {
     
      await CONTACT.findByIdAndDelete(req.params.id)
  
      res.status(201).json({
          status : "success ",
          message : "Contact Delete Successfull",
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
    // req.body.password = await bcrypt.hash(req.body.password,10)
    let data = await CONTACT.findByIdAndUpdate(req.params.id,req.body,{new : true})
  
      res.status(201).json({
          status : "success ",
          message : "Contact Update Successfull",
          data : data
      })
    } catch (error) {
      res.status(404).json({
          status : "Fali",
          message: error.message,
      })
    }
  }