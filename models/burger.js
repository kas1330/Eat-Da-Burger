var orm = require('../config/orm');

var burger = {
    selectAll: function(cb) {
        //name of the table passed to function
      orm.selectAll("burgers", function(res) {
    //cb will run after the main function because we need the response from the DB before we can run the call back function
  
        cb(res);
      });
    },

    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  }
    
}
module.exports= burger;