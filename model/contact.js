const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstname:{
        type : String,
        require : true,
    },
    lastname:{
        type : String,
        require : true,
    },
    username:{
        type : String,
        require : true,
    },
    email:{
        type : String,
        require : true,
        unique : true

    },
    contactNo:{
        type : String,
        require : true,
        unique : true
    },
    Address:{
        type : String,
        require : true,
    },
    CompanyAddress:{
        type : String,
        require : true,
    },
    city:{
        type : String,
        require : true,
    },
    Area:{
        type : String,
        require : true,
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    },
});
let CONTACT = mongoose.model('contact',contactSchema)
module.exports = CONTACT