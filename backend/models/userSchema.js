const mongoose = require("mongoose");

const bcrypt = require('bcrypt')

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



userSchema.pre("save", async function(next) {

    if(this.isModified("password")){
      
        this.password = await bcrypt.hash(this.password, 10);
        
        this.confirmpassword = await bcrypt.hash(this.password, 10);
        
    }
    next();
});



const Register = new mongoose.model("register", userSchema);


module.exports = Register;