exports.up = function(knex) {
  return knex.schema
    .createTable("landowners", tbl => {
      tbl.increments("landowner_id");

      tbl.string("avatar", 255);
      tbl.string("first_name", 128).notNullable;
      tbl.string("last_name", 128).notNullable;
      tbl.string("email", 128).notNullable.unique;
      tbl.string("password", 128);
    })
    .createTable("users", tbl => {
      tbl.increments("user_id");

      tbl.string("avatar", 255);
      tbl.string("first_name", 128).notNullable;
      tbl.string("last_name", 128).notNullable;
      tbl.string("email", 128).notNullable.unique;
      tbl.string("password", 128);
    })
    .createTable("amenities", tbl => {
      tbl.increments("amenity_id");

      tbl.string("amenity_name", 255).notNullable;
      tbl.string("icon", 255).notNullable;
    })
    .createTable("properties", tbl => {
      tbl.increments("property_id");

      tbl
        .integer("landowner_id")
        .notNullable()
        .unsigned()
        .references("landowner_id")
        .inTable("landowners")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("property_name", 255).notNullable;
      tbl.string("address", 255).notNullable;
      tbl.string("city", 255).notNullable;
      tbl.string("state", 255).notNullable;
      tbl.string("image", 255).notNullable;
      tbl
        .integer("amenity_id")
        .notNullable()
        .unsigned()
        .references("amenity_id")
        .inTable("amenities")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("reservations", tbl => {
      tbl.increments("reservation_id");

      tbl
        .integer("property_id")
        .unsigned()
        .references("property_id")
        .inTable("properties")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.date("start_date");
      tbl.date("end_date");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("reservations")
    .dropTableIfExists("properties")
    .dropTableIfExists("amenities")
    .dropTableIfExists("users")
    .dropTableIfExists("landowners");
};
