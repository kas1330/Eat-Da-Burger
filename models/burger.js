var orm = require('../config/orm');

var burger = {
    all: function(cb) {
        //name of the table passed to function
      orm.all("burgers", function(res) {
    //cb will run after the main function because we need the response from the DB before we can run the call back function
  
        cb(res);
      });
    }
}
module.exports= burger;