const mysql = require('mysql');
const express = require('express');
const exphbs = require('express-handlebars');

var app = express();


var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
  });