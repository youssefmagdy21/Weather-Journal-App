// Server Side

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("public"));

// Run the server
// Callback to debug
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running\nServer started at port: ${port}\n`);
});

// GET Route to send data to the client
app.get("/getData", (req, res) => {
  console.log("server sent this data to the client:");
  console.log(projectData);
  res.send(projectData);
});

// POST Route to save data in the server
app.post("/saveData", (req, res) => {
  projectData = req.body;
  console.log("server recieved this data from the client:");
  console.log(projectData);
  res.send({ status: "OK", respnseMessage: `server recieved data` });
});
