const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const router = require("./api/Routes/index");
const app = express();
const jwt = require("jsonwebtoken");
var multer = require("multer");
var path = require("path");
var cors = require("cors");

const port = 6600;
app.listen(port, () => {
	console.log(`Making Magic on port ${port}`);
});

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router);

module.exports = app;
