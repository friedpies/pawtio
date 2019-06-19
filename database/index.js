require("dotenv").config();
const mongoose = require("mongoose");
const { Place, User, City } = require("./models");

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

Place.findById("5d0a6a423707fe6fe13fa9cd").then(result => {
  // console.log("Finding Place after Importing Modules", result);
});

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

// module.exports = { db };
