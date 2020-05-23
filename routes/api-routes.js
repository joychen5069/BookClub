const db = require("../models");

// Routes
// =============================================================
module.exports = (app) => {

  // GET route for all the club names
  app.get("/api/clubs", (req, res) => {
    db.Clubs.findAll({}).thend(dbClubs => {
      console.log("pulling all club names", dbClubs)
      res.json(dbClubs)
    })
  });



  // POST route for creating a new club
  app.post("/api/clubs", (req, res) => {
    //create the clubname
    db.Clubs.create({
      clubName: req.body.text
    }).then(dbClubs => {
      //add it to the table
      console.log("creating new club name...updating list", dbClubs)
      res.json(dbClubs)
    })
  });


};
