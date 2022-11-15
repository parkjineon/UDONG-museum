const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose');
const config = require('./config/key')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(config.mongoURI,{
	useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
    console.log('...mongoDB connected successfully')
}).catch(err => {
    console.log(err)
})