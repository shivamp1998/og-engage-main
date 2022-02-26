const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
//const passport = require('passport');
const crypto = require('crypto');

//require('dotenv').config();

const connection = require('./db/conn');
require('dotenv').config();


app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req,res) => {
    res.send('Test App')
})



app.listen(PORT, ()=> {
    console.log(`Server Started on Port ${PORT}`);
})