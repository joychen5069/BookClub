const orm = require('../config/orm')

const club = {
  //show all the burgers
    selectAll: (cb) => {
      orm.selectAll("clubs", (res) => {
        cb(res);
      });
    },

    //add a new burger into the to be eaten pile
    insertOne: (cols, vals, cb) => {
      orm.insertOne("clubs", cols, vals, (res) => {
        cb(res);
      });
    },
    
    delete: function(condition, cb) {
      orm.delete("clubs", condition, (res) => {
        cb(res);
      });
    },

    selectByID: (id, cb) => {
      orm.selectbyId("clubs", id, (res) => {
        cb(res);
      });
    },
    
    
  };
  
  // Export the database functions for the controller (clubsController.js).
  module.exports = club;