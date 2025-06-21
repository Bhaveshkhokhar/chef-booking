const Chef = require("../model/chef");
exports.getAllChef = async (req, res, next) => {
  try {
    const chefs = await Chef.find();
    res.status(201).json(chefs);
  } catch (err) {
    console.log("error encounter");
  }
};
