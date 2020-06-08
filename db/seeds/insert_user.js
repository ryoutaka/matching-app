exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { user_name: "ken", age: 28, height: 173 },
        { user_name: "kouta", age: 30, height: 178 },
        { user_name: "akira", age: 22, height: 168 },
      ]);
    });
};
