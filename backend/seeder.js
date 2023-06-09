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
      "./models/Users",

      "./models/Track", // Add the Track model file path here
    ]);

    // Clear specified collections
    seeder.clearModels(
      [
        "Category",
        "Bank",
        "Item",
        "Member",
        "Item",
        "Feature",
        "Image",
        "Booking",
        "Users",
        "Track",
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
  {
    model: "Category",
    documents: [
      {
        _id: mongoose.Types.ObjectId("7c14d6ddaa964a95a646b98a"),
        name: "Houses with beauty backyard",
        itemId: [],
      },
      {
        _id: mongoose.Types.ObjectId("60982fc1e3c1623a15b30c57"),
        name: "Hotels with large living room",
        itemId: [],
      },
      {
        _id: mongoose.Types.ObjectId("60982fc1e3c1623a15b30c5f"),
        name: "Apartment with kitchen",
        itemId: [],
      },
    ],
  },
  // end category
  // start item
  
  // end item
  // start image
  {
    model: "Image",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb1"),
        imageUrl: "images/image-mostpicked-1-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb2"),
        imageUrl: "images/image-mostpicked-2-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb3"),
        imageUrl: "images/image-mostpicked-3-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb4"),
        imageUrl: "images/image-mostpicked-4-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb5"),
        imageUrl: "images/item-1.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb6"),
        imageUrl: "images/image-mostpicked-5-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb7"),
        imageUrl: "images/image-mostpicked-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb8"),
        imageUrl: "images/image-mostpicked-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cdb9"),
        imageUrl: "images/image-mostpicked-9-min.jpg",
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd10"),
        imageUrl: "images/image-mostpicked-10-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd11"),
        imageUrl: "images/image-mostpicked-11-min.jpg",
      },
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd12"),
        imageUrl: "images/image-mostpicked-12-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd13"),
        imageUrl: "images/image-mostpicked-13-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd14"),
        imageUrl: "images/image-mostpicked-14-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd15"),
        imageUrl: "images/image-mostpicked-15-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd16"),
        imageUrl: "images/image-category-1-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd17"),
        imageUrl: "images/image-category-2-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd18"),
        imageUrl: "images/image-category-3-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd19"),
        imageUrl: "images/image-category-4-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd20"),
        imageUrl: "images/image-category-5-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd21"),
        imageUrl: "images/image-category-6-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd22"),
        imageUrl: "images/image-category-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd23"),
        imageUrl: "images/image-category-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd24"),
        imageUrl: "images/image-category-9-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd25"),
        imageUrl: "images/image-category-7-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd26"),
        imageUrl: "images/image-category-8-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd27"),
        imageUrl: "images/image-category-9-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd28"),
        imageUrl: "images/image-category-10-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd29"),
        imageUrl: "images/image-category-11-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd30"),
        imageUrl: "images/image-category-12-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd31"),
        imageUrl: "images/image-category-13-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd32"),
        imageUrl: "images/image-category-14-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd33"),
        imageUrl: "images/image-category-15-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd34"),
        imageUrl: "images/image-category-16-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd35"),
        imageUrl: "images/image-category-17-min.jpg",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cd36"),
        imageUrl: "images/image-category-18-min.jpg",
      },
    ],
  },
  // end image
  // start feature
  {
    model: "Feature",
    documents: [
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa01"),
        name: "bedroom",
        qty: 2,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa02"),
        name: "living room",
        qty: 23,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa03"),
        name: "televison",
        qty: 12,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa04"),
        name: "televison",
        qty: 5,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa05"),
        name: "mbp/s",
        qty: 5,
        imageUrl: "images/feature-5.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa06"),
        name: "unit ready",
        qty: 5,
        imageUrl: "images/feature-6.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa07"),
        name: "refigrator",
        qty: 5,
        imageUrl: "images/feature-7.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa08"),
        name: "televion",
        qty: 5,
        imageUrl: "images/feature-8.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      // item 2
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa09"),
        name: "bedroom",
        qty: 2,
        imageUrl: "images/feature-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa10"),
        name: "living room",
        qty: 23,
        imageUrl: "images/feature-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa11"),
        name: "televison",
        qty: 12,
        imageUrl: "images/feature-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa12"),
        name: "televison",
        qty: 5,
        imageUrl: "images/feature-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa13"),
        name: "mbp/s",
        qty: 5,
        imageUrl: "images/feature-5.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa14"),
        name: "unit ready",
        qty: 5,
        imageUrl: "images/feature-6.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa15"),
        name: "refigrator",
        qty: 5,
        imageUrl: "images/feature-7.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        // done
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90aa16"),
        name: "televion",
        qty: 5,
        imageUrl: "images/feature-8.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
    ],
  },
  // end feature
  // start activity
  {
    model: "Activity",
    documents: [
      // done
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb01"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb02"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb03"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb04"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
      },
      // done 2
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb05"),
        name: "Green Lake",
        type: "Nature",
        imageUrl: "images/activity-3.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb06"),
        name: "Dog Clubs",
        type: "Pool",
        imageUrl: "images/activity-2.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb07"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-1.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90bb08"),
        name: "Labour and Wait",
        type: "Shopping",
        imageUrl: "images/activity-4.png",
        itemId: mongoose.Types.ObjectId("5e96cbe292b97300fc902223"),
      },
    ],
  },
  // end activity

  // start booking
  {
    model: "Booking",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc90cee1"),
        bookingStartDate: "12-12-2020",
        bookingEndDate: "12-12-2020",
        invoice: 1231231,
        itemId: {
          _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222"),
          title: "Village Angga",
          price: 6,
          duration: 2,
        },
        total: 12,
        memberId: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        bankId: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        payments: {
          proofPayment: "images/bukti.jpeg",
          bankFrom: "BCA",
          status: "Proses",
          accountHolder: "ang",
        },
      },
    ],
  },
  // end booking

  // member
  {
    model: "Member",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903333"),
        firstName: "Elfin",
        lastName: "Sanjaya",
        email: "elfinsanjaya12@gmail.com",
        phoneNumber: "082377954008",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903334"),
        firstName: "Yein",
        lastName: "Narayana",
        email: "elfinsanjaya1207@gmail.com",
        phoneNumber: "082377954008",
      },
    ],
  },
  {
    model: "Bank",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903322"),
        nameBank: "Mandiri",
        nomorRekening: "089898",
        name: "elfin",
        imageUrl: "images/logo bca.png",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903323"),
        nameBank: "BCA",
        nomorRekening: "878678",
        name: "elfin",
        imageUrl: "images/logo mandiri.png",
      },
    ],
  },
  {
    model: "Track",
    documents: [],
  },

  {
    model: "Users",
    documents: [
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903345"),
        username: "semeru",
        password: "semeru",
        itemId: [{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902222") }],
        role: "admin",
        organizer: "Gunung Semeru",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903346"),
        username: "merbabu",
        password: "merbabu",
        itemId: [{ _id: mongoose.Types.ObjectId("5e96cbe292b97300fc902223") }],
        role: "pengelola",
        organizer: "Gunung Merbabu",
      },
      {
        _id: mongoose.Types.ObjectId("5e96cbe292b97300fc903347"),
        username: "penanggungan",
        password: "penanggungan",
        role: "pengelola",
        organizer: "Gunung Penanggungan",
      },
    ],  
  },
];
