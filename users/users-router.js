// Bring in express
const express = require("express");

// Bring in the helper functions from users-db
const users = require("./users-db");

// Import the router
const router = express.Router();

// export the router
module.exports = router;
// Endpoint to register or create a new user
router.post("/register", (req, res) => {
  const newUser = req.body;
  users
    .addUser(newUser.username, newUser.password)
    .then((user) => {
      res.status(200).json({ message: `user created successfully` });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});
