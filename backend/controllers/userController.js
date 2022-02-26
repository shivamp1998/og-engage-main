const Register = require('../models/userSchema');

exports.SignUp= async(req, res)=> {

try {
    
    const {username,email, company, password, confirmpassword} = req.body;

    if(password === confirmpassword) {
    const createUser= new Register(
        {
           username,
           email,
           company,
           password,
           confirmpassword
        })
    const response = await createUser.save();
    res.send(response)
    } else {
        res.send("Password are not matching");
    }
 } catch (error) {
    console.log(error);
    res.sendStatus(404)
}

}

exports.createUser= async (req,res)=> {
    try {
        const data = await Auth.find()
        console.log(data)
        res.send(data);
      } catch (e) {
        res.staus(500).send(e);
      }
}
