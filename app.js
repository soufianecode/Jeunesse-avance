const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

//Syntaxe to use body-parser
app.use(bodyParser.urlencoded({extended : true}));

//Syntaxe to use EJS + use CSS/images
app.set('view engine', 'ejs');
app.use(express.static("\public"));

//Take the router
let router = require('./router');
app.use(router);

//Set up localhost
app.listen(3000, function(){
    console.log("Server on 3000 activated.");
})