const express = require("express");
const router = express.Router();
const userController = require("../Controllers/UsersController");
router.get("/", userController.getAllUser);
// router.get('/:_id', userController.read_data);
router.post("/create", userController.addUser);
router.put("/:id", userController.updateUser);
router.put("/delete/:id", userController.deleteUser);
module.exports = router;
