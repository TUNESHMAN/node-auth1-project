// This is the file that is aware of knex. It is where we bring in our configuration whether it is production, development, or staging
const knex = require("knex");

// We bring in the created knexfile
const config = require("../knexfile");

const env = process.env.NODE._ENV || "development";

const configOptions = config[env];

// Export the file
module.exports = knex(configOptions);
