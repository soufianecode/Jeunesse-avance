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

// //view engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// app.post('/send', (req, res)=> {

// const output = `

// <p> you have a new contact request dude </p>
// <h3> contact details </h3>

//     <ul>
//     <li>Name: ${req.body.name} </li>
//     <li>Name: ${req.body.company} </li>
//     <li>Name: ${req.body.email} </li>
//     <li>Name: ${req.body.phone} </li>
//     </ul>
//     <h3>Message</h3>
//    <p> ${req.body.message} </p>


// `;

// // async..await is not allowed in global scope, must use a wrapper
// async function main() {
//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     let testAccount = await nodemailer.createTestAccount();
  
//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: "localhost", // METTRE LADRESSE IP DE ABEL ICI need smtp server
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: testAccount.user, // MAIL fictif
//         pass: testAccount.pass, // PWD fictif
//       },
//       tls: { 
//          rejectUnauthorized:false
//       }
//     });
  
//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: '"Fred Foo 👻" <foo@example.com>', // MAIL fictif
//       to: "bar@example.com, baz@example.com", // MAIL de ABEL 
//       subject: "Hello ✔", // Subject line
//       text: "Hello world?", // plain text body
//       html: output // html body 
//     });
  
//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

//     res.render('main', {msg: 'email has been sent'});


//   }
  
//   main().catch(console.error);






// });




//Set up localhost
app.listen(3000, function(){
    console.log("Server on 3000 activated.");
})
