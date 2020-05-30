const express = require('express');
const book = require('../models/books')

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
//create route to display all the books using handlebars

router.get("/", (req, res) => {
    res.render("index");
});


router.get("/books", (req, res) => {

  book.selectAll((data) => {
    let hbsObject = {
      books: data
    };
    console.log(hbsObject);
    res.render("/books", hbsObject);
  });
});

//create route to add a club to list
router.post("/api/books", (req, res) => {
  console.log(req.body.name)
  book.insertOne([
    "bookName"
  ], [
    req.body.name
  ], (result) => {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.delete("/api/books/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  book.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;