require("dotenv").config();
const express = require("express");
// const logger = require("morgan");
const bodyParser = require("body-parser");
const router = require("./src/Routes/index");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 6660;
app.listen(PORT, () => {
  console.log(`Magic Happen on port ${PORT} ...`);
});

app.use(cors());
// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);

module.exports = app;
