// Bring in express
const express = require("express");
const bcrypt = require("bcryptjs");

// Bring in the helper functions from users-db
const users = require("./users-db");

// Import the router
const router = express.Router();

// export the router
module.exports = router;
// Endpoint to register or create a new user
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  //   Hashing the password
  const bcryptHash = bcrypt.hashSync(password, 10);

  const newUser = { username, password: bcryptHash };
  users
    .addUser(newUser.username, newUser.password)
    .then((user) => {
      res.status(201).json({ message: `user created successfully` });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

router.post("/login", (req, res) => {
  const credentials = req.body;
  users
    .findUser(credentials.username)
    .then((user) => {
      // compareSync takes the hashed password and breaks it into parts
      //   if (user&& credentials.password ===user.password)
      if (user && bcrypt.compareSync(credentials.password, user.password)) {
        res
          .status(200)
          .json({ message: `Logged in successfully, ${user.username}` });
      } else {
        res.status(401).json({ message: `Invalid credentials` });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});
