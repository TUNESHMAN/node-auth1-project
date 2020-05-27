const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const server = express(); //Instantiate the express application

// Use the middleware here
server.use(express.json()); //This is the body parser
server.use(cookieParser()); //This is the cookie parser
server.use(cors());
server.use(helmet());

// create a dummy endpoint
server.get("/", (req, res) => {
  res.send({ message: `Welcome to the users endpoint` });
});

// Export the server to be seen by the outer world
module.exports = server;
