require("dotenv").config();
const { connect, connection, Schema } = require("mongoose");

connect(
  `mongodb+srv://admin:${
    process.env.DB_PW
  }@pawtio-cluster-0-4dnos.mongodb.net/${
    process.env.DB_NAME
  }?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

const db = connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log(`CONNECTED to ${process.env.DB_NAME} database`);
});

let placeSchema = Schema({
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
  hours: [{}],
  images: [],
  userInput: [{}]
});

let userSchema = Schema({
  _id: Schema.Types.ObjectId,
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



module.exports = { db };
