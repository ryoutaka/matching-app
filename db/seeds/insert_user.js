exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "ken3623@yahoo.co.jp",
          password: "kenkenken",
          user_name: "ken",
          age: 28,
          height: 173,
        },
        {
          email: "kouta3623@yahoo.co.jp",
          password: "koutakouta",
          user_name: "kouta",
          age: 30,
          height: 178,
        },
        {
          email: "akira3623@yahoo.co.jp",
          password: "akiraakira",
          user_name: "akira",
          age: 22,
          height: 168,
        },
      ]);
    });
};
