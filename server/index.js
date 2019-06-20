require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.EXPRESS_PORT;
const { db } = require("../database");
const { Place, User, City } = require("../database/models");

const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));

app.get("/api/places", (req, res) => {
  const filterParams = req.query;
  // query database for places based on results of filter query
  Place.findById("5d0a6a423707fe6fe13fa9cd").then(results => {
    res.send(results);
  });
});

app.listen(port, () => {
  console.log("Server is listening on port: ", port);
});
