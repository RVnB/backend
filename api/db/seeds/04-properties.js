exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("properties")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("properties").insert([
        {
          property_id: 1,
          landowner_id: "1",
          property_name: "Olympic Coast Camp",
          property_description:
            "Olympic Coast Camp is a delightful spot nestled in a beautifully serene setting, surrounded by pristine forests and meadows 10 minutes from Lake Crescent at the foot of the Olympic National Park. The beautiful property affords ideal rv site camping with mountain and forest views.",
          address: "2516 James St",
          city: "Port Angeles",
          state: "WA",
          image: "https://unsplash.com/photos/o31cz2XQDFw",
          price: 50,
          rating: 4.8
        },
        {
          property_id: 2,
          landowner_id: "1",
          property_name: "Coastal Retreat",
          property_description:
            "Just minutes from beaches in a quiet fishing village is a great way to relax with your family. La Push is a small community situated at the mouth of the Quillayute River in Clallam County, Washington. It is located within the Quileute Indian Reservation, which is home to the Quileute tribe. La Push is known for its whale-watching , stunning views, and picturesque hiking trails. The area offers a historic Washington coast vacation that is sure to be unforgettable.",
          address: "1472 Oceanview Dr",
          city: "La Push",
          state: "WA",
          image: "https://unsplash.com/photos/jrS7tPQH1q0",
          price: 35,
          rating: 4.9
        },
        {
          property_id: 3,
          landowner_id: "2",
          property_name: "Camp Fever",
          property_description:
            "Rural campsite in beautiful Vermont hamlet. Camp in the backyard or back forty. You choose. Please don't follow the GPS to get here though! You'll need our directions because the rural nature or our location can trick even the finest of instruments.",
          address: "3817 Edwards Rd",
          city: "Cedar Hill",
          state: "VT",
          image: "https://unsplash.com/photos/kRpsPx8dt4Y",
          price: 25,
          rating: 4
        },
        {
          property_id: 4,
          landowner_id: "2",
          property_name: "Cloud 9 Private Campsite",
          property_description:
            "Cloud 9 primitive campsite...perfect for tents, pop up/very small campers, group retreats & small events....Campsite is Located in the field across from our home hidden by a row of large pine trees w/a spectacular view from all sides! We provide a fire pit w/grate to cook on, Hose for running H20, solar shower and bundles of firewood can be purchased for $5 each. No bathrooms no cell/wifi service/right next to ATV trails(brushwood) Come enjoy this beautiful cloud 9 view!!!!",
          address: "607 Rt 3",
          city: "Fairlee",
          state: "VT",
          image: "https://unsplash.com/photos/jwdtI3H-4eg",
          price: 25,
          rating: 4
        },
        {
          property_id: 5,
          landowner_id: "2",
          property_name: "Magic Land",
          property_description:
            "Laurelin Retreat is 50+ magical acres in central Vermont. Bring your tent and gear, camp in our fields, woods, or mossy clearings. All year round, we have tent sites, fire pits, and portapotties, plus a seasonal outdoor hot/cold shower. No indoor facilities, tents, or gear provided.",
          address: "222 RT 26 E",
          city: "Thetford Center",
          state: "VT",
          image: "https://unsplash.com/photos/2Y4dE8sdhlc",
          price: 20,
          rating: 3.8
        },
        {
          property_id: 6,
          landowner_id: "3",
          property_name: "Cliffside",
          property_description:
            "This comfortable and airy Bandon site has amazing ocean views and convenient beach access. Walk miles of gorgeous beaches and enjoy nearby world class golf courses.",
          address: "67 Gould Ave",
          city: "Bandon",
          state: "OR",
          image: "https://unsplash.com/photos/0ialT4fXAaA",
          price: 25,
          rating: 4.3
        },
        {
          property_id: 7,
          landowner_id: "4",
          property_name: "Dual Ocean View",
          property_description:
            "CLEAN – SECURE – AND TWINKLE LIGHTS IN THE TREES. Get out fo the RV parking lot and stay at The New Bandon Wayside. Our micro-RV park provides a homey setting – back-in space with 30AMP electric, water, and sewer connections. Spaces are graveled and feature design elements inspired by nature and re-purposed materials. Nightly guests have access to private RV bathrooms with showers and coin-operated laundry facilities.",
          address: "335 N Pebble Beach Dr",
          city: "Crescent City",
          state: "CA",
          image: "https://unsplash.com/photos/Xe1SA5kXw5M",
          price: 35,
          rating: 4.6
        },
        {
          property_id: 8,
          landowner_id: "5",
          property_name: "Untamed Wilderness",
          property_description:
            "Located 7 miles from Zion National Park, this campground has spectacular views of the canyon and mountains. The site has a picnic table and private fire pit. The scenery is spectacular and night time stars are amazing! Perfect location to visit both Zion and Bryce Canyon.",
          address: "78398 Snowpass Rd",
          city: "Cannonville",
          state: "UT",
          image: "https://unsplash.com/photos/3WsJt0B8H7Y",
          price: 30,
          rating: 4.7
        },
        {
          property_id: 9,
          landowner_id: "6",
          property_name: "Bay Bridge Views",
          property_description:
            "A prime location situated just a few minutes from San Francisco and beaches. Footpaths to all beaches and pleasant scenic walks. This is an ideal base for you to discover and enjoy the delights of the Bay Area. Within easy reach of many attractions and activities. A visit to the marina and beaches are a must. Here you will find many shops and the larger supermarkets.",
          address: "48 Strauss St",
          city: "Belvedere Island",
          state: "CA",
          image: "https://unsplash.com/photos/myTJXt-tzPU",
          price: 40,
          rating: 4.3
        },
        {
          property_id: 10,
          landowner_id: "7",
          property_name: "Vineyard Retreat",
          property_description:
            "Goldfield is a family vineyard, ideally situated between Hepburn Springs and Castlemaine. Set on 25 acres, this stunning property has a number of dams and creek frontage with lots of private spots and picnic places. If you choose to eat in you have a bbq just outside your tent and there are no dishes to wash, we take care of that too!",
          address: "3 Greenland Rd",
          city: "Davenport",
          state: "CA",
          image: "https://unsplash.com/photos/mOk_Ac6IPPY",
          price: 50,
          rating: 4.1
        },
        {
          property_id: 11,
          landowner_id: "7",
          property_name: "Lake in the Woods",
          property_description:
            "Nestled in the countryside on the tranquil Gorselands Park, with stunning views across Chesil Lake, this the perfect location for ramblers and anglers. It is dog friendly, well equipped and comfortable.",
          address: "8908 Elk Dr",
          city: "Ovando",
          state: "MT",
          image: "https://unsplash.com/photos/unmA0TJr3r0",
          price: 20,
          rating: 3.5
        },
        {
          property_id: 12,
          landowner_id: "8",
          property_name: "Imperial Beach",
          property_description:
            "Get ready for a relaxed and comfortable stay. Something that distinguishes us without a doubt is the tranquility, comfort and quality of the seashore, not to mention our proximity to great restaurants and bars.",
          address: "387 Driftwood St",
          city: "Imperial Beach",
          state: "CA",
          image: "https://unsplash.com/photos/YFQGWKW33Ck",
          price: 25,
          rating: 4.4
        },
        {
          property_id: 13,
          landowner_id: "8",
          property_name: "Windy Hills Lavender Farm",
          property_description:
            "Located on two acres in Pine Valley. Access to fishing, boating, hiking, biking, horseback riding, bird watching. We have room for your horse to stay as well.",
          address: "3374 Stone Bridge Trail",
          city: "Pine",
          state: "AZ",
          image: "https://unsplash.com/photos/-UO7_Di3I9o",
          price: 25,
          rating: 5
        },
        {
          property_id: 14,
          landowner_id: "9",
          property_name: "Gramps Camp",
          property_description:
            "In the beautiful North Carolina mountains. There is a term in the rural spaces of Appalachia, denoting a space as a hollow or holler. It basically represents an open valley within a mountainous landscape. This creative play space is a rural oasis.",
          address: "10 Speedway Blvd",
          city: "Jasper",
          state: "SC",
          image: "https://unsplash.com/photos/ISUB1vUFFfI",
          price: 20,
          rating: 4.5
        },
        {
          property_id: 15,
          landowner_id: "10",
          property_name: "Waves of Grain",
          property_description:
            "Close to the Tetons and a perfect place to set up camp! The neighbors dogs like to visit, they are very sweet girls, but the golden retriever will steal right handed shoes or gloves if left unattended. Just the right though, you can leave the lefts out all you want.",
          address: "46 Red Rd",
          city: "Driggs",
          state: "ID",
          image: "https://unsplash.com/photos/lzbFllF05XY",
          price: 20,
          rating: 3.7
        }
      ]);
    });
};
