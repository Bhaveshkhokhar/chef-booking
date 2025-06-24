const express = require('express');
const contactController = require('../controller/contactController');
const contactRouter = express.Router();

contactRouter.post('/contact', contactController.createContact);

module.exports = contactRouter;