const express = require('express');
const club = require('../models/clubs')
const book = require('../models/books')

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
//create route to display all the clubs using handlebars

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/clubs", (req, res) => {

  club.selectAll((data) => {
    let hbsObject = {
      clubs: data
    };
    // console.log(hbsObject);
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
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

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

//INSERT BOOK ROUTES BELOW

router.get("/books", (req, res) => {

  book.selectAll((data) => {
    let hbsObject = {
      books: data
    };
    
    // console.log(hbsObject);
    res.render("top-picks", hbsObject)
  });

  //pull the clubs
  // club.selectAll((data) => {
  //   let clubObj = {
  //     clubs: data
  //   };
    
  //   // console.log(clubObj);
  //   res.render("top-picks", clubObj)
  // });

});


module.exports = router;