const express = require("express");
const chefRouter = express.Router();
const chefController = require("../controller/chefController");

chefRouter.get("/get-chefs", chefController.getAllChef);
chefRouter.post("/hostchefchangeavailablity",chefController.hostchangechefAvailability);
chefRouter.post("/addChefData",chefController.addChef);
module.exports = chefRouter;
