const express = require("express");
const profileController = require("../../Controllers/user/profileController");
const Router = express.Router();

Router.get("/detail/:id", profileController.getProfile);
Router.get("/detail/user/:id", profileController.getProfileUser);
Router.get("/detail/pemateri/:id", profileController.getProfilePemateri);

module.exports = Router;
