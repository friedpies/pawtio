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

// app.get("/api/:endpoint", (req, res) => {
// const endpoint = req.params.endpoint;
// const params = req.query;
// // console.log(endpoint, params);
// res.send({ endpoint, params: params });
// });

app.get("/api/city", (req, res) => {
  const cityQuery = req.query.q.toUpperCase();
  // console.log(req.query);
  City.findOne({ cityName: cityQuery })
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.error(err);
      res.end("something went wrong");
    });
});

app.listen(port, () => {
  console.log("Server is listening on port: ", port);
});
