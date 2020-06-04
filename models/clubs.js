const orm = require('../config/orm')

const club = {
  //show all the clubs
    selectAll: (cb) => {
      orm.selectAll("clubs", (res) => {
        cb(res);
      });
    },

    //add a new club
    insertOne: (cols, vals, cb) => {
      orm.insertOne("clubs", cols, vals, (res) => {
        cb(res);
      });
    },
    
    //delete a club - not using
    delete: function(condition, cb) {
      orm.delete("clubs", condition, (res) => {
        cb(res);
      });
    },

    //select a club by ID
    selectByID: (id, cb) => {
      orm.selectbyId("clubs", id, (res) => {
        cb(res);
      });
    },
    
    //update the book a club is reading
    update: (data, condition, cb) => {
      console.log("data", data, "condition", condition)
      orm.update(data, condition, (res) => {
        cb(res);
      });
    },
    
    
  };
  
  // Export the database functions for the controller (clubsController.js).
  module.exports = club;