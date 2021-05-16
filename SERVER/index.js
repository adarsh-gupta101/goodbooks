const express = require("express");
const axios = require("axios");
const app = express();

app.post("/", (req, res) => {});

app.listen(process.env.PORT || 3001, () => {
  console.log("server is running");
});
