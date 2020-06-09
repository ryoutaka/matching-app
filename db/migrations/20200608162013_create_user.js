exports.up = function (knex) {
  return knex.schema.createTable("users", (t) => {
    t.increments();
    t.text("user_name").notNullable();
    t.integer("age").notNullable();
    t.integer("height").notNullable();
    t.text("email").unique().notNullable();
    t.text("password").unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
