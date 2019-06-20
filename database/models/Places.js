const mongoose = require("mongoose");

let placeSchema = mongoose.Schema({
  name: String,
  address: {
    lineOne: String,
    lineTwo: String,
    city: String,
    state: String,
    zip: Number,
    latLong: [Number, Number]
  },
  phone: String,
  website: String,
  filters: {},
  images: [],
  userInput: [{}],
  openingHours: {}
});

const Place = mongoose.model("Place", placeSchema, "places");

module.exports = { Place };
