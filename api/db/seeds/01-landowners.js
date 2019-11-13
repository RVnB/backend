exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("landowners")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("landowners").insert([
        {
          landowner_id: 1,
          avatar: "https://unsplash.com/photos/kMJp7620W6U",
          first_name: "Evan",
          last_name: "Pena",
          username: "evanpena",
          email: "evan_pena@example.com",
          password: "pass123"
        },
        {
          landowner_id: 2,
          avatar: "https://unsplash.com/photos/i2hoD-C2RUA",
          first_name: "Irma",
          last_name: "Richards",
          username: "irmarichards",
          email: "irma_richards@example.com",
          password: "pass123"
        },
        {
          landowner_id: 3,
          avatar: "https://unsplash.com/photos/IfDfxUrJasI",
          first_name: "Claire",
          last_name: "Fisher",
          username: "clairefisher",
          email: "claire_fisher@example.com",
          password: "pass123"
        },
        {
          landowner_id: 4,
          avatar: "https://unsplash.com/photos/iFgRcqHznqg",
          first_name: "Eduardo",
          last_name: "Henry",
          username: "eduardohenry",
          email: "eduardo_henry@example.com",
          password: "pass123"
        },
        {
          landowner_id: 5,
          avatar: "https://unsplash.com/photos/moDxmttUP00",
          first_name: "Albert",
          last_name: "Alexander",
          username: "albertalexander",
          email: "albert_alexander@example.com",
          password: "pass123"
        },
        {
          landowner_id: 6,
          avatar: "https://unsplash.com/photos/mgoxHRNoT00",
          first_name: "Audrey",
          last_name: "Robertson",
          username: "audreyrobertson",
          email: "audrey_robertson@example.com",
          password: "pass123"
        },
        {
          landowner_id: 7,
          avatar: "https://unsplash.com/photos/MP0IUfwrn0A",
          first_name: "Bessie",
          last_name: "Bell",
          username: "bessiebell",
          email: "bessie_bell@example.com",
          password: "pass123"
        },
        {
          landowner_id: 8,
          avatar: "https://unsplash.com/photos/6BI7fVlw_BA",
          first_name: "Shawn",
          last_name: "Murphy",
          username: "shawnmurphy",
          email: "shawn_murphy@example.com",
          password: "pass123"
        },
        {
          landowner_id: 9,
          avatar: "https://unsplash.com/photos/OhKElOkQ3RE",
          first_name: "Zack",
          last_name: "Miles",
          username: "zackmiles",
          email: "zack_miles@example.com",
          password: "pass123"
        },
        {
          landowner_id: 10,
          avatar: "https://unsplash.com/photos/bqe0J0b26RQ",
          first_name: "Scarlett",
          last_name: "Mckinney",
          username: "scarlettmckinney",
          email: "scarlett_mckinney@example.com",
          password: "pass123"
        }
      ]);
    });
};
