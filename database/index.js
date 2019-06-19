require("dotenv").config();
const mongoose = require("mongoose");

// console.log("THIS IS FROM SERVER", process.env.PORT);

mongoose.connect(
  `mongodb+srv://admin:${
    process.env.DB_PW
  }@pawtio-cluster-0-4dnos.mongodb.net/${
    process.env.DB_NAME
  }?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log(`CONNECTED to ${process.env.DB_NAME} database`);
});

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
  opening_hours: {},
  images: [],
  userInput: [{}]
});

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

let citySchema = mongoose.Schema({
  cityName: String,
  state: String,
  stateAbbrv: String,
  backgroundImages: [String]
});

const Place = mongoose.model("Place", placeSchema, "places");
const User = mongoose.model("User", userSchema, "users");
const City = mongoose.model("User", citySchema, "cities");


// Place.updateOne(
//   { _id: "5d0a6a423707fe6fe13fa9cd" },
//   {
//     opening_hours: {
//       opening_hours: {
//         open_now: true,
//         periods: [
//           {
//             close: {
//               day: 0,
//               time: "2200"
//             },
//             open: {
//               day: 0,
//               time: "1100"
//             }
//           },
//           {
//             close: {
//               day: 1,
//               time: "2200"
//             },
//             open: {
//               day: 1,
//               time: "1100"
//             }
//           },
//           {
//             close: {
//               day: 2,
//               time: "2200"
//             },
//             open: {
//               day: 2,
//               time: "1100"
//             }
//           },
//           {
//             close: {
//               day: 3,
//               time: "2200"
//             },
//             open: {
//               day: 3,
//               time: "1100"
//             }
//           },
//           {
//             close: {
//               day: 4,
//               time: "2200"
//             },
//             open: {
//               day: 4,
//               time: "1100"
//             }
//           },
//           {
//             close: {
//               day: 5,
//               time: "2200"
//             },
//             open: {
//               day: 5,
//               time: "1100"
//             }
//           },
//           {
//             close: {
//               day: 6,
//               time: "2200"
//             },
//             open: {
//               day: 6,
//               time: "1100"
//             }
//           }
//         ],
//         weekday_text: [
//           "Monday: 11:00 AM – 10:00 PM",
//           "Tuesday: 11:00 AM – 10:00 PM",
//           "Wednesday: 11:00 AM – 10:00 PM",
//           "Thursday: 11:00 AM – 10:00 PM",
//           "Friday: 11:00 AM – 10:00 PM",
//           "Saturday: 11:00 AM – 10:00 PM",
//           "Sunday: 11:00 AM – 10:00 PM"
//         ]
//       }
//     }
//   }
// ).then(result => {
//   console.log("Ran insert", result);
// });

module.exports = { db };
