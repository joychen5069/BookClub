const express = require('express');
const club = require('../models/clubs')

const router = express.Router();

// Create all our routes and set up logic within those routes where required.

//create route to display main page
router.get("/", (req, res) => {
    res.render("index");
});

router.get("/myclub", (req, res) => {
  res.render("individualclub");
});

//create route to view all clubs
router.get("/clubs", (req, res) => {

  club.selectAll((data) => {
    let hbsObject = {
      clubs: data
    };
    
    res.render("clubs", hbsObject);
  });
});

//create route to add a club to list
router.post("/api/clubs", (req, res) => {
  console.log(req.body.name)
  club.insertOne([
    "clubName"
  ], [
    req.body.name
  ], (result) => {
    res.json({ id: result.insertId });
  });
});

//create route to delete a club by id
router.delete("/api/clubs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  club.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.get("/clubs/:id", function(req, res) {
  var clubId = req.params.id;

  club.selectByID(clubId, (data) => {
    let hbsObject = {
      club: data
    };
    console.log("Aww shit \n" + JSON.stringify(hbsObject));
    res.render("club-home", hbsObject);
  });
});





module.exports = router;