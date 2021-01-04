var connection = require('../config/connection');

// selectAll();
// insertOne();
// updateOne();
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  

var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },

    create: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

      update: function(table, cols, whereCondition, cb){
        const queryString = `UPDATE ${table} SET ${cols} = true WHERE ${whereCondition}`;
        connection.query(queryString, whereCondition, function(err, result){
          if(err){
            throw err;
          }

          cb(result);
        });
      }
      
}


  

module.exports= orm;