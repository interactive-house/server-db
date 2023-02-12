const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB using Mongoose
// This will be implemeted shortly

// Use the GET and POST routers
const getRouter = require("./api/get");
const postRouter = require("./api/post");
app.use("/", getRouter);
app.use("/", postRouter);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
