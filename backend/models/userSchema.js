const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    company: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    confirmpassword: {
        type:String,
        required:true
    }
    
   
});
const Register = new mongoose.model("register", UserSchema);


module.exports = Register;