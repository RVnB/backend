exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_id: 1,
          avatar: "https://unsplash.com/photos/DYBs6Usgtg0",
          first_name: "Max",
          last_name: "Edwards",
          username: "maxedwards",
          email: "max_edwards@example.com",
          password: "pass123"
        },
        {
          user_id: 2,
          avatar: "https://unsplash.com/photos/WzfWGiF3d98",
          first_name: "Candace",
          last_name: "Richards",
          username: "candacerichards",
          email: "Candace_richards@example.com",
          password: "pass123"
        }
      ]);
    });
};
