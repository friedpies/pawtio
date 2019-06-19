require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.EXPRESS_PORT;
const { db } = require("../database");
const cors = require("cors");

app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));

app.get("/api/test", (req, res) => {
  res.send("TEST ROUTE WORKING");
});

app.listen(port, () => {
  console.log("Server is listening on port: ", port);
});
