const db = require("../models/index");

const express = require('express');
// const burger = require('../models/burgers')

const router = express.Router();

// Routes
// =============================================================


  // GET route for all the club names
  router.get("/api/clubs", (req, res) => {
    db.selectAll((data) => {
      let hbsObject = {
        Clubs: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });



  // // POST route for creating a new club
  // app.post("/api/clubs", (req, res) => {
  //   //create the clubname
  //   db.Clubs.create({
  //     clubName: req.body.text
  //   }).then(dbClubs => {
  //     //add it to the table
  //     console.log("creating new club name...updating list", dbClubs)
  //     res.json(dbClubs)
  //   })
  // });


