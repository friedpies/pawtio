const mongoose = require("mongoose");

let citySchema = mongoose.Schema({
  cityName: String,
  state: String,
  stateAbbrv: String,
  backgroundImages: [String]
});

const City = mongoose.model("City", citySchema, "cities");

module.exports = { City };
