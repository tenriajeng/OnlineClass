const express = require("express");
// const express = require("express");
const userController = require("../Controllers/UsersController");

const Router = express.Router();

var cors = require("cors");

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
Router.get("/", cors(corsOptions), userController.getAllUser);
// Router.get('/:_id', userController.read_data);
Router.post("/create", cors(corsOptions), userController.addUser);
Router.put("/:id", cors(corsOptions), userController.updateUser);
Router.put("/delete/:id", cors(corsOptions), userController.deleteUser);

module.exports = Router;
