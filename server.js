const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express(); //Instantiate the express application

// Use the middleware here
server.use(express.json()); //This is the body parser
server.use(cors());
server.use(helmet());

// Export the server to be seen by the outer world
module.exports = server;
