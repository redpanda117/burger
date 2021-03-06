// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var list = {
//select all items 
  selectAll: function(cb) {
    orm.selectAll("items", function(res) {
      cb(res);
    });
  },
    
// The variables cols and vals are arrays.
// add one item to database
  insertOne: function(cols, vals, cb) {
    orm.insertOne("items", cols, vals, function(res) {
      cb(res);
    });
  },

//chane boolean status of exsiting item
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("items", objColVals, condition, function(res) {
      cb(res);
    });
  }

};

// Export the database functions for the controller 
module.exports = list;