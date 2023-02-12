const express = require("express");
const router = express.Router();



// Define routes for /, /door, /window, and /lamp APIs
router.get("/", function (req, res) {
  console.log("Request received at /:");
  if (!req) {
    res.send("You succefully send a request and request body: ", req);
  } else {
    res.send(`This is the root API.`);
  }
});

router.get("/door", function (req, res) {
  console.log("Request received at /door:");
  if (!req) {
    res.send("You succefully send a request and request body: ", req);
  } else {
    res.send(`This is the door API.`);
  }
});

router.get("/window", function (req, res) {
  console.log("Request received at /window:");
  if (!req) {
    res.send("You succefully send a request and request body: ", req);
  } else {
    res.send(`This is the window API.`);
  }
});

router.get("/lamp", function (req, res) {
  console.log("Request received at /lamp:");
  if (!req) {
    res.send("You succefully send a request and request body: ", req);
  } else {
    res.send(`This is the lamp API.`);
  }
});


module.exports = router;
