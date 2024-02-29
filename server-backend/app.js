const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config()
const controller = require('./controllers/controller'); 

const app = express();

app.use(cors(
  {
    origin: ['https://deploy-mern.vercel.app'],
    methods: ['POST', 'GET'],
    credentials: true
  }
));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', controller);

module.exports = app;