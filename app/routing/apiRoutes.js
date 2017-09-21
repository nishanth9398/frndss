// Data from friend.js
// =============================================================
var friendsData = require("../data/friend.js");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });
}