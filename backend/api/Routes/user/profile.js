const express = require("express");
const profileController = require("../../Controllers/user/profileController");
const Router = express.Router();
const auth = require("../../../config/auth");

Router.get("/detail/:id", profileController.getProfile);
Router.get("/detail/user/:id", auth.verifyUser, profileController.getProfileUser);
Router.get("/detail/pemateri/:id", auth.verifyPemateri, profileController.getProfilePemateri);

module.exports = Router;
