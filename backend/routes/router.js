const express = require('express')
const router = express.Router();

const userCntrl = require('../controllers/userController');



router.post('/register',userCntrl.SignUp);
router.get("/user",userCntrl.createUser);



module.exports= router;