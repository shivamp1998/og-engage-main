const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://masadi:Dukey25@cluster0.d8rfb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   

}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(e);
})