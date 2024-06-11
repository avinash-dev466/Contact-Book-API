const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    username:{
        type : String,
        require : true,
        unique : true
    },
    email:{
        type : String,
        require : true,
        unique : true
    },
    password:{
        type : String,
        require : true,
    },
  
});
let ADMIN = mongoose.model('admin',adminSchema)
module.exports = ADMIN