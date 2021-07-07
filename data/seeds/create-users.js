exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { id: 1, username: "tuneshman", password: "babatunde" },
        { id: 2, username: "kingskid", password: "nopassword" },
        { id: 3, username: "tolaked", password: "akere" },
      ]);
    });
};
