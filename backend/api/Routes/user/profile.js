const express = require("express");
const profileController = require("../../Controllers/User/profileController");
const Router = express.Router();
const auth = require("../../../config/auth");
// use auth.verifyToken for secure route

Router.get("/detail/:id", profileController.getProfile);
Router.get("/detail/user/:id", profileController.getProfileUser);
Router.get("/detail/pemateri/:id", profileController.getProfilePemateri);
Router.post("/", auth.verifytoken, profileController.getProfile);


module.exports = Router;