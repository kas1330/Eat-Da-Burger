const mysql = require('mysql');
const express = require('express');
const exphbs = require('express-handlebars');

var app = express();


var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/burgers_controller.js');
app.use(routes);

app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
  });