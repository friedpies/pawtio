require("dotenv").config();
const mongoose = require("mongoose");
const { Place } = require("../database/models");
const seedData = require("../database/seed_data/seed.json");

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

// Place.insertMany(seedData, (err, response) => {
//   if (err) {
//     console.log("insertion error: ", err);
//   } else {
//     Place.update(seedData, {
//       upsert: false
//     });
//     console.log("SEEDED DB");
//   }
// });
