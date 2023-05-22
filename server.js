const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const socketio = require("socket.io");
const getRouter = require("./api/get");

const app = express();

const connectDatabase = require("./db/controllers/connectDB");
// Connect to mongoDB database
connectDatabase();

// Serve static files from the "client" directory
app.use(express.static("client"));

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Use this after the variable declaration

// Create HTTP server and attach Socket.io
const server = http.createServer(app);
const io = socketio(server);

// Keep track of the current state of the lamp
let lampState = "off";

// Handle socket connection
io.on("connection", (socket) => {
  console.log("A user connected");

  // Send the current state of the lamp to the new client
  socket.emit("lamp:status", { status: lampState });

  // Handle incoming messages from the client
  socket.on("lamp:on", (data) => {
    console.log("Received lamp:on message");
    // Update the state of the lamp and broadcast the new state to all connected clients
    lampState = "on";
    io.emit("lamp:status", { status: lampState });
  });

  socket.on("lamp:off", (data) => {
    console.log("Received lamp:off message");
    // Update the state of the lamp and broadcast the new state to all connected clients
    lampState = "off";
    io.emit("lamp:status", { status: lampState });
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Use the GET router
app.use("/", getRouter(io));

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});