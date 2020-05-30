const orm = require('../config/orm')

const book = {
  //show all the clubs
    selectAll: (cb) => {
      orm.selectAll("books", (res) => {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (controller.js).
  module.exports = book;