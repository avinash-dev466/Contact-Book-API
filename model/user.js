const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type : String,
        require : true,
    },
    firstname:{
        type : String,
        require : true,
    },
    lastname:{
        type : String,
        require : true,
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
let USER = mongoose.model('user',userSchema)
module.exports = USER