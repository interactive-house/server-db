const express = require("express");
const router = express.Router();

// Define routes for /, /door, /window, and /lamp APIs

/*

The following features will be implemented later.


function getRoutes(io) {
  router.get("/", function (req, res) {
    console.log("Request received at /:");
    res.send(`This is the root API.`);
  });

  router.get("/door", function (req, res) {
    console.log("Request received at /door:");
    res.send(`This is the door API.`);
  });

  router.get("/window", function (req, res) {
    console.log("Request received at /window:");
    res.send(`This is the window API.`);
  });


*/

  router.get("/lamp/on", function (req, res) {
    console.log("Request received at /lamp: on");
    // Send a message to the Socket.io server to turn the lamp on
    io.emit('lamp:on', { data: 'on' });
    res.send("Turning on lamp...");
  });

  router.get("/lamp/off", function (req, res) {
    console.log("Request received at /lamp: off");
    // Send a message to the Socket.io server to turn the lamp off
    io.emit('lamp:off', { data: 'off' });
    res.send("Turning off lamp...");
  });

  return router;
}

module.exports = getRoutes;

