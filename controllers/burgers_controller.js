var express = require('express');
var burger = require('../models/burger.js');
var router = express.Router();

//create the router for the app

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    console.log('inside api/burgers in burger_controller');
    
    burger.create([
      //names of db comulns
      "burger_name", "devoured"
    ], [
      //user input, have to use the same value after body that you used on the other page. (burger_name)
      req.body.burger_name, 0
    ], function(result) {
      // Send back the ID of the new cat that was created and inserted in to the db
      res.json({ id: result.insertId });
    });
  });

  router.post("/api/devour/:id", function(req, res){
    console.log('inside api/devour in burger controller');


  });

module.exports = router;

//post will create a burger

//put will update a burger to devoured

//not sure if i need a delete