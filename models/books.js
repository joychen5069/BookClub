const orm = require('../config/orm')

const book = {
  //show all the burgers
    selectAll: (cb) => {
      orm.selectAll("books", (res) => {
        cb(res);
      });
    },

    //add a new burger into the to be eaten pile
    insertOne: (cols, vals, cb) => {
      orm.insertOne("books", cols, vals, (res) => {
        cb(res);
      });
    },
    
    delete: function(condition, cb) {
      orm.delete("books", condition, (res) => {
        cb(res);
      });
    }
    
    
  };
  
  // Export the database functions for the controller (clubsController.js).
  module.exports = book;