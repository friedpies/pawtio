require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3002;
const { db } = require("../database");
const { Place } = require("../database/models");

const cors = require("cors");

app.use(cors());
// app.use(express.static(path.join(__dirname, "../build")));

// app.get("/api/places", (req, res) => {
//   const filterParams = req.query;
//   const filterObj = {};
//   for (let filter in filterParams) {
//     filterObj[`filters.${filter}`] = filterParams[filter];
//   }

//   Place.find(filterObj).then(results => {
//     res.json(results);
//   });
// });

app.listen(process.env.PORT || port, () => {
  console.log("Server is listening on port: ", port);
});
