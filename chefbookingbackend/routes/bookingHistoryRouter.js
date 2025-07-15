const express = require("express");
const bookingHistoryRouter = express.Router();
const bookingHistoryController = require("../controller/bookingHistoryController");

bookingHistoryRouter.get(
  "/getYourBookingsHistory",
  bookingHistoryController.getYourBookingsHistory
);
module.exports = bookingHistoryRouter;
