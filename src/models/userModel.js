const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    fname : {
        type:String, 
        required:true,
        trim:true
    },
    lname : {
        type:String,
        required:true,
        trim:true
    },
    email : {
        type:String, 
        required:true,
        unique:true,
        trim:true
    },

    phone : {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password : {
        type:String,
        required:true
    },
    address : { 
      shipping : {
             street: {type:String, required:true},
             city: {type:String, required:true},
             pincode: {type:String, required:true}
                 },
      billing : {
                street: {type:String, required:true},
                city: {type:String, required:true},
                pincode: {type:String, required:true}
                },
    }

},{ timestamps: true })

module.exports = mongoose.model("user", userSchema)
