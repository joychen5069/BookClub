var path = require("path");

// Routes
// =============================================================
module.exports = (app) => {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads main handlebar and 
  app.get("/", (req, res) => {
    res.render("index");;
    console.log(res);
  });


  app.get("/clubs", (req, res) => {
    res.render("clubs")
  });


};

