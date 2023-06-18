const Item = require("../../models/Item");
const Treasure = require("../../models/Activity");
const Treveler = require("../../models/Booking");
const Category = require("../../models/Category");
const Bank = require("../../models/Bank");
const Booking = require("../../models/Booking");
const Member = require("../../models/Member");
const axios = require("axios");
const mongoose = require("mongoose");
const Track = require("../../models/Track");

async function geoCode(address) {
  const accessToken =
    "pk.eyJ1IjoiYWdyZWdhdG9yIiwiYSI6ImNsaXIwZmhxNTAwaDEzZ2xjYTZrNDdjdm0ifQ.N-EmT90hgdTuS5WnGZYXAQ";
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${accessToken}&limit=1`;
  const response = await axios.get(url);
  const coordinates = {
    longitude: response.data.features[0].center[0],
    latitude: response.data.features[0].center[1],
  };

  return coordinates;
}
async function generateInvoice() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const length = 10; // Panjang invoice yang diinginkan

  let invoice = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    invoice += characters.charAt(randomIndex);
  }

  return invoice;
}

module.exports = {
  viewLandingPage: async (req, res) => {
    try {
      const mostPicked = await Item.find()
        .select("_id title country city price unit imageId")
        .limit(5)
        .populate({ path: "imageId", select: "_id imageUrl" });

      const category = await Category.find()
        .select("_id name")
        .limit(3)
        .populate({
          path: "itemId",
          select: "_id title country city isPopular  imageId",
          perDocumentLimit: 4,
          option: { sort: { sumBooking: -1 } },
          populate: {
            path: "imageId",
            select: "_id imageUrl",
            perDocumentLimit: 1,
          },
        });

      const treveler = await Treveler.find();
      const treasure = await Treasure.find();
      const city = await Item.find();

      for (let i = 0; i < category.length; i++) {
        for (let x = 0; x < category[i].itemId.length; x++) {
          const item = await Item.findOne({ _id: category[i].itemId[x]._id });
          item.isPopular = false;
          await item.save();
          if (category[i].itemId[0] === category[i].itemId[x]) {
            item.isPopular = true;
            await item.save();
          }
        }
      }

      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl: "images/testimonial2.jpg",
        name: "Happy Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Angga",
        familyOccupation: "Product Designer",
      };

      res.status(200).json({
        hero: {
          travelers: treveler.length,
          treasures: treasure.length,
          cities: city.length,
        },
        mostPicked,
        category,
        testimonial,
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: error });
    }
  },

  detailPage: async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findOne({ _id: id })
        .populate({ path: "featureId", select: "_id name qty imageUrl" })
        .populate({ path: "activityId", select: "_id name type imageUrl" })
        .populate({ path: "imageId", select: "_id imageUrl" })
        .populate({ path: "trackId", select: "_id name" })
        .populate({ path: "bankId", select: "_id name" });

      // const bank = await Bank.find();
      const address = item.trackId[0].name;
      const testimonial = {
        _id: "asd1293uasdads1",
        imageUrl: "images/testimonial1.jpg",
        name: "Happy Family",
        rate: 4.55,
        content:
          "What a great trip with my family and I should try again next time soon ...",
        familyName: "Angga",
        familyOccupation: "Product Designer",
      };

      // Add function to get current weather
      const coordinates = await geoCode(address);
      const secret_weather = "ae97c50fef527dbd65b43f79e8e51ef1";
      const weatherUrl = `http://api.weatherstack.com/current?access_key=${secret_weather}&query=${coordinates.latitude},${coordinates.longitude}&units=m`;
      const weatherResponse = await axios.get(weatherUrl);
      const currentWeather = {
        description: weatherResponse.data.current.weather_descriptions[0],
        temperature: weatherResponse.data.current.temperature,
      };
      const data = {
        ...item._doc,
        testimonial,
        currentWeather,
      };
      // console.log(data)
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  bookingPage: async (req, res) => {
    const {
      idItem,
      duration,
      startDateBooking,
      endDateBooking,
      bankName,
      nameAccountBank,
      members,
    } = req.body;
    if (!req.file) {
      return res.status(401).json({ message: "Image Not Found" });
    }
    if (
      idItem === undefined ||
      duration === undefined ||
      startDateBooking === undefined ||
      endDateBooking === undefined ||
      bankName === undefined ||
      nameAccountBank === undefined ||
      nameMember === undefined ||
      addressMember === undefined ||
      noIdMember === undefined ||
      phoneMember === undefined
    ) {
      res.status(402).json({ message: "Lengkapi semua field" });
    }
    const item = await Item.findOne({ _id: idItem });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    // const tracks=item.trackId[0].name;
    // console.log(item)
    item.sumBooking += 1;

    await item.save();
    const idTrack = item.trackId[0]._id;
    const findTrack = await Track.findOne({ _id: idTrack });
    const trackName = findTrack.name;
    // console.log(trackName)
    let total = item.price * duration;
    let tax = total * 0.1;

    const invoice = await generateInvoice();

    const memberData = [];
    for (const member of members) {
      const { nameMember, addressMember, noIdMember, phoneMember } = member;
      const newMember = await Member.create({
        nameMember,
        addressMember,
        noIdMember,
        phoneMember,
      });
      // console.log(memberData)
      memberData.push(newMember._id);
    }

    const newBooking = {
      invoice: invoice,
      bookingStartDate: startDateBooking,
      bookingEndDate: endDateBooking,
      memberId: memberData,
      total: (total += tax),
      track: trackName,
      itemId: {
        _id: item._id,
        title: item.title,
        price: item.price,
        duration: duration,
      },
      payments: {
        proofPayment: `images/${req.file.filename}`,
        bankFrom: bankName,
        accountHolder: nameAccountBank,
      },
    };

    const booking = await Booking.create(newBooking);
    item.memberId.push(...memberData);
    await item.save();
    res.status(200).json({ message: "Success Booking", booking });
  },
};
