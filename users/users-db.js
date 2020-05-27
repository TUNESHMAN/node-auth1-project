// Bring in the db-config file
const db = require("../data/db-config");

module.exports = {
  addUser,
  findUser,
};

function addUser(username, password) {
  return db("users").insert({ username, password });
}

function findUser(username) {
  return db("users").where({ username }).first();
}
