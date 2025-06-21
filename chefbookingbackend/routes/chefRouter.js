const express = require("express");
const chefRouter = express.Router();
const chefController = require("../controller/chefController");

chefRouter.get("/get-chefs", chefController.getAllChef);

module.exports = chefRouter;
