const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: {
    lineOne: String,
    lineTwo: String,
    city: String,
    state: String,
    zip: Number,
    latLong: [Number, Number]
  },
  reviews: [{}]
});

const User = mongoose.model("User", userSchema, "users");

module.exports = { User };
