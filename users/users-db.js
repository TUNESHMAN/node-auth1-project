// Bring in the db-config file
const db = require("../data/db-config");

module.exports = {
  addUser,
};

function addUser(username, password) {
  return db("users").insert({ username, password });
}
