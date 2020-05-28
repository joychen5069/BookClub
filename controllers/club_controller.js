var express = require("express");

var router = express.Router();

var clubs = require("../models/clubList.js");

router.get("/", function(req, res) {
  clubs.all(function(data) {
        console.log(hbsObject);
    res.render("/clubs", hbsObject);
  });
});



module.exports = router;
