exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("amenities")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("amenities").insert([
        {
          amenity_id: 1,
          amenity_name: "Potable Water",
          icon:
            "https://www.flaticon.com/free-icon/tap_86285?term=water&page=1&position=16"
        },
        {
          amenity_id: 2,
          amenity_name: "Electric Hookups",
          icon:
            "https://www.flaticon.com/free-icon/lightning-electric-energy_63702?term=electricity&page=1&position=38"
        },
        {
          amenity_id: 3,
          amenity_name: "Campfires Allowed",
          icon:
            "https://www.flaticon.com/free-icon/campfire_66656?term=campfire&page=1&position=14"
        },
        {
          amenity_id: 4,
          amenity_name: "Pets Welcome",
          icon:
            "https://www.flaticon.com/free-icon/pawprint_1076928?term=pet&page=1&position=3"
        },
        {
          amenity_id: 5,
          amenity_name: "On-site Restrooms",
          icon:
            "https://www.flaticon.com/free-icon/toilet_185547?term=restroom&page=1&position=2"
        }
      ]);
    });
};
