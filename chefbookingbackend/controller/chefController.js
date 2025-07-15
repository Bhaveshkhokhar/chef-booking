const Chef = require("../model/chef");
const Host = require("../model/host");
const jwt = require("jsonwebtoken");
const Mongoose = require("mongoose");
require("dotenv").config();
const secret = process.env.SECRET_KEY;
const { check, validationResult } = require("express-validator");

exports.addChef = [
  check("Name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name must contain only letters and spaces"),

  check("Price")
    .notEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a number")
    .custom((val) => val >= 0)
    .withMessage("Price must be non-negative"),

  check("Available")
    .notEmpty()
    .withMessage("Availability is required")
    .isBoolean()
    .withMessage("Availability must be true or false"),

  check("Type")
    .notEmpty()
    .withMessage("Type is required")
    .isIn([
      "One-Time Service",
      "Chef's Table",
      "Chef for Party",
      "Chef Subscription",
    ])
    .withMessage("Type must be a valid option"),

  check("Speciality")
    .trim()
    .notEmpty()
    .withMessage("Speciality is required")
    .isLength({ min: 2 })
    .withMessage("Speciality must be at least 2 characters"),

  check("Bio")
    .trim()
    .notEmpty()
    .withMessage("Bio is required")
    .isLength({ max: 1000 })
    .withMessage("Bio must be at most 1000 characters"),

  check("Certifications")
    .customSanitizer((value) => {
      if (typeof value === "string") {
        return value.split(",").map((v) => v.trim());
      }
      return value;
    })
    .isArray({ min: 1 })
    .withMessage("At least one certification is required")
    .custom((certs) => certs.every((c) => typeof c === "string"))
    .withMessage("Each certification must be a string"),

  check("Experience")
    .notEmpty()
    .withMessage("Experience is required")
    .isNumeric()
    .withMessage("Experience must be a number")
    .custom((val) => val >= 0)
    .withMessage("Experience must be non-negative"),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: "fail",
        field: errors.array()[0].param,
        message: errors.array()[0].msg,
      });
    }

    const token = req.cookies.host_token;
    if (!token) {
      return res.status(401).json({
        isLoggedIn: false,
        message: "please login",
      });
    }
    try {
      let decoded;
      try {
        decoded = jwt.verify(token, secret);
        // token is valid
      } catch (err) {
        // token is invalid or expired
        return res.status(401).json({
          isLoggedIn: false,
          message: "host is not authenticated please login",
        });
      }

      const host = await Host.findOne({ hostid: decoded.Hostid });

      if (!host) {
        return res.status(404).json({
          isLoggedIn: false,
          message: "Host not found",
        });
      }
      const chef = {
        profileImage: `/upload/${req.file.filename}`,
        name: req.body.Name,
        available: req.body.Available === "true" || req.body.Available === true, // ensure boolean
        type: req.body.Type,
        price: Number(req.body.Price),
        speciality: req.body.Speciality,
        bio: req.body.Bio,
        experience: Number(req.body.Experience),
        certifications: Array.isArray(req.body.Certifications)
          ? req.body.Certifications
          : req.body.Certifications?.split(",").map((c) => c.trim()),
        rating: 0, // default
      };

      const chefObject = new Chef(chef);
      const chefData = await chefObject.save();

      return res.status(201).json({
        status: "success",
        message: "details are added",
        id: chefData._id,
        profileImage: chefData.profileImage,
      });
    } catch (error) {
      console.error("Error add user details:", error);
      res
        .status(500)
        .json({ message: "Internal server error please try after some time" });
    }
  },
];
exports.hostchangechefAvailability = async (req, res, next) => {
  const token = req.cookies.host_token;
  if (!token) {
    return res.status(401).json({
      isLoggedIn: false,
      message: "please login",
    });
  }
  try {
    let decoded;
    try {
      decoded = jwt.verify(token, secret);
      // token is valid
    } catch (err) {
      // token is invalid or expired
      return res.status(401).json({
        isLoggedIn: false,
        message: "host is not authenticated please login",
      });
    }

    const host = await Host.findOne({ hostid: decoded.Hostid });

    if (!host) {
      return res.status(404).json({
        isLoggedIn: false,
        message: "Host not found",
      });
    }
    const chef = await Chef.updateOne(
      { _id: req.body.id },
      { $set: { available: req.body.flag } }
    );
    if (!chef) {
      return res.status(404).json({
        message: " chef not found",
      });
    }
    return res.status(201).json({
      status: "success",
    });
  } catch (error) {
    console.error("Error while updating:", error);
    return res
      .status(500)
      .json({ message: "Internal server error please try after some time" });
  }
};

exports.getAllChef = async (req, res, next) => {
  try {
    const chefs = await Chef.find();
    res.status(201).json(chefs);
  } catch (err) {
    console.log("error encounter");
  }
};
