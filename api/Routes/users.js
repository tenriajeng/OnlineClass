const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UsersController");
var cors = require("cors");
var app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
router.get("/", cors(corsOptions), userController.getAllUser);
// router.get('/:_id', userController.read_data);
router.post("/create", userController.addUser);
router.put("/:id", userController.updateUser);
router.put("/delete/:id", userController.deleteUser);
module.exports = router;
