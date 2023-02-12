const express = require("express");
const router = express.Router();

// Define routes for /, /door, /window, and /lamp POST APIs
router.post("/", function (req, res) {
  console.log("POST request received at /:");
  if (!req) {
    res.send("You successfully sent a request and request body: ", req);
  } else {
    res.send(`This is the root API. You sent: ${JSON.stringify(req.body)}`);
  }
});

router.post("/door", function (req, res) {
  console.log("POST request received at /door:");
  if (!req) {
    res.send("You successfully sent a request and request body: ", req);
  } else {
    res.send(`This is the door API. You sent: ${JSON.stringify(req.body)}`);
  }
});

router.post("/window", function (req, res) {
  console.log("POST request received at /window:");
  if (!req) {
    res.send("You successfully sent a request and request body: ", req);
  } else {
    res.send(`This is the window API. You sent: ${JSON.stringify(req.body)}`);
  }
});

router.post("/lamp", function (req, res) {
  console.log("POST request received at /lamp:");
  if (!req) {
    res.send("You successfully sent a request and request body: ", req);
  } else {
    res.send(`This is the lamp API. You sent: ${JSON.stringify(req.body)}`);
  }
});

module.exports = router;
