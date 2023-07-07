const express = require('express');
const mongoose = require("mongoose");
const furniture = require('./routes/route_articles') // Route to the Api furniture
const users = require('./routes/route_users') // Route to the Api users
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");

const app = express();
require("dotenv").config();

app.use(cors()); // enable cross-origin requests

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// *************Connection to MongoDB*************
  mongoose.connect(process.env.DB_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Connexion à MongoDB échouée !", error));

 // *** BODY-PARSER
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// configuring middleware to handle URL-encoded form data.
app.use(express.urlencoded({extended: true}));

// *** Api path , one for the furnitures and one for the users
// Add the following code to serve the pictures from the assets directory
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(express.static("assets"));

app.use('/furnitures', furniture);  
app.use('/users', users);  
module.exports = app;




