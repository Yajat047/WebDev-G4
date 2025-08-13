const express = require('express');
const path = require('path');
const app = express();

// Import only upload routes (multer-related)
const uploadRoutes = require('./routes/uploadRoutes');

// //OVERRIDIING SENDSTATUS
// app.response.sendStatus = function (statusCode, type, message) {
//   // code is intentionally kept simple for demonstration purpose
//   return this.contentType(type)
//     .status(statusCode)
//     .send(message)
// }


// app.get("/",(req,res)=>{
//   // res.sendStatus(200);
//   res.sendStatus(200, 'text/plain', '{"message":"All set ready to go"}')

// });


// app.get("/badrequest",(req,res)=>{
//   // res.sendStatus(400);
//   res.sendStatus(400, 'text/plain', '{"message":"All set ready to go"}')

// });


// app.get("/notfound",(req,res)=>{
//   // res.sendStatus(404);
//   res.sendStatus(404, 'text/plain', '{"message":"All set ready to go"}')

// });


// app.get("/servererror",(req,res)=>{
//   // res.sendStatus(501);
//   res.sendStatus(501, 'text/plain', '{"message":"All set ready to go"}')

// });

var hbs = require('hbs');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars configuration
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

// Main routes (kept in server.js)
app.get("/home", (req, res) => {
  res.render("home.hbs", {
    companyName: "YD INDUSTRIES",
    founder: "YAJAT"
  });
});

app.get("/products", (req, res) => {
  res.render("products.hbs", {
    products: ["WATCH", "SHOES", "GLASSES"]
  });
});

// Use upload routes (multer-related only)
app.use('/', uploadRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
