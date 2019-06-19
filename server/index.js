require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT;
const { db } = require("../database");

app.use(express.static(path.join(__dirname, "../build")));

app.listen(port, () => {
  console.log("Server is listening on port: ", port);
});
