const orm = require('../config/orm')

const book = {
  //show all the burgers
    selectAll: (cb) => {
      orm.selectAll("books", (res) => {
        cb(res);
      });
    },

     
  };
  
  // Export the database functions for the controller (clubsController.js).
  module.exports = book;