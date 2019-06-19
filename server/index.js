require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.EXPRESS_PORT;
const { db } = require("../database");
const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));

app.get("/api/:endpoint", (req, res) => {
  const endpoint = req.params.endpoint;
  const params = req.query;
  console.log(endpoint, params);
  res.send({ endpoint, params: params });
});

app.get("/api/bgphotos/:city", (req, res) => {
  res.send(req.params.city);
});

app.listen(port, () => {
  console.log("Server is listening on port: ", port);
});
