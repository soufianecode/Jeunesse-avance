// creation de serv

const express = require('express');
const mongoose = require('mongoose');
// const authRoutes = require('./routes/authRoutes')
// const cookieParser = require('cookie-Parser');

const app = express();


// middleware

app.use(express.static('public'));
app.use(express.json());
// app.use(cookieParser());

// lecture de fichier ejs

app.set('view engine' , 'ejs');

//database connection

// const dbURI = '';


// mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true })
// .then((result) => app.listen(8080))
// .catch((err) => console.log(err));

app.listen(8080, function() {
    console.log('listening on 8080')
  })

//routes

app.get('/', (req,res) => res.render('index'));
// app.use(authRoutes);