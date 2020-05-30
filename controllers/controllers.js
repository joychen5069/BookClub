const express = require('express');

const club = require('../models/clubs')
const book = require('../models/books')

const router = express.Router();

//Create route to display main page
router.get("/", (req, res) => {
    res.render("index");
});

router.get("/create", (req, res) => {
  res.render("create-a-club");
});

//Create route to view all clubs
router.get("/clubs", (req, res) => {
  club.selectAll((data) => {
    let hbsObject = {
      clubs: data
    };
    res.render("clubs", hbsObject);
  });
});

//Create route to add a club to list
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

//Create route to get club by id
router.get("/clubs/:id", function(req, res) {
  var clubId = req.params.id;
  club.selectByID(clubId, (data) => {
    let hbsObject = {
      club: data
    };
    res.render("club-home", hbsObject);
  });
});

//Create route to delete a club by id
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
      books: data
    };
    res.render("club-home", hbsObject);
  });
});

//INSERT BOOK ROUTES BELOW
router.get("/books", (req, res) => {
  book.selectAll((data) => {
    let hbsObject = {
      books: data,
      clubs: data
    };
    // console.log(hbsObject);
    res.render("books", hbsObject)
  });
});

module.exports = router;