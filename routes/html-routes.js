var db = require("../models");
const Clubs = require("../models/clubList")

// Routes
// =============================================================
module.exports = (app) => {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads main handlebar and 
  app.get("/", (req, res) => {
    res.render("index");

  });


  app.get("/clubs", (req, res) => {
    // console.log(req)
    res.sendFile(path.join(__dirname, " "))
  });


};

