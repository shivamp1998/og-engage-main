const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db/conn');

const Route=require('./routes/router')
app.use(express.json());
app.use("/api",Route);

const PORT = process.env.PORT || 3000;


app.listen(PORT, ()=> {
    console.log(`Server Started on Port ${PORT}`);
})