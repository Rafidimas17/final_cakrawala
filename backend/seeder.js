var seeder = require("mongoose-seed");
var mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB via Mongoose
seeder.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    // Load Mongoose models
    seeder.loadModels([
      "./models/Category",
      "./models/Bank",
      "./models/Item",
      "./models/Feature",
      "./models/Activity",
      "./models/Member",
      "./models/Image",
      "./models/Member",
      "./models/Booking",
      "./models/Address",
      "./models/Users",
      "./models/Price",
      "./models/DetailItem",
      "./models/Description",
      "./models/Track", // Add the Track model file path here
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        "Category",
        "Price",
        "Description",
        "Address",
        "Bank",
        "Item",
        "Member",
        "Feature",
        "Image",
        "Booking",
        "Users",
        "Track",
        "DetailItem",
      ],
      function () {
        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
          seeder.disconnect();
        });
      }
    );
  }
);

var data = [
  // start category
  
  // end category
  // start item
  
  // end item
  // start image
  
  // end image
  // start feature
  
  // end feature
  // start activity
 
  // end activity

  // start booking
  
  // end booking

  // member
 
  
  
 
 
  
  {
    model: "Users",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "semeru",
        password: "semeru",       
        role: "admin",
        noPhone:"628564573673",
        address:"Jl. Jawa No.2 Ranupane Lumajang",
        organizer: "Gunung Semeru",
      },     
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903347"),
        username: "penanggungan",
        password: "penanggungan",
        role: "pengelola",
        organizer: "Gunung Penanggungan",
        noPhone:"62856823478298428",
        address:"Jl. Penanggungan No.1 Tamiajeng Mojokerto",
      },
    ],
  },
 
];

