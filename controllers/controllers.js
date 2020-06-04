const express = require('express');

const club = require('../models/clubs')
const book = require('../models/books')

const router = express.Router();

//Create route to display main page
router.get("/", (req, res) => {
    res.render("index");
});

//Create route to display create a club page
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

router.post("/api/clubs", (req, res) => {
  console.log("THIS IS BEING CALLED!!!!!!")
console.log("req.body", req.body)
 club.insertOne([
   "clubName", "clubCreator", "description"
 ], [
   req.body.clubName, req.body.userName, req.body.description
 ], (result) => {
   res.json({ id: result.insertId });
 });
});



//INSERT BOOK ROUTES BELOW
router.get("/books", (req, res) => {

  book.selectAll((data) => {
    let hbsObject = {
      books: data,
      clubs: data
    };
    // console.log(hbsObject)
    res.render("books", hbsObject)
  });
});

//udpate book club is reading
router.put("/api/clubs/:id", function(req, res) {
  var condition = req.params.id;
console.log("condition", typeof condition)
console.log("req.body.currentlyReading", req.body.currentlyReading)
  club.update({
    currentlyReading: req.body.currentlyReading
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


router.post("/api/books", (req, res) => {
  
  res.render("club-home");
  
});


module.exports = router;