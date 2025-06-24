const { User } = require("../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET_KEY;
const { check, validationResult } = require("express-validator");

exports.userAdd = [
  check("Name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name must contain only letters and spaces"),

  check("Email").trim().isEmail().withMessage("Invalid email format"),

  check("Address").trim(),

  check("Gender")
    .check("gender")
    .trim()
    .notEmpty()
    .withMessage("Gender is required")
    .isIn(["Male", "Female", "Other"])
    .withMessage("Gender must be either male, female, or others"),

  check("Birthdate")
    .isISO8601()
    .withMessage("Birthdate must be a valid date")
    .custom((value) => {
      const inputDate = new Date(value);
      const today = new Date();
      if (inputDate > today) {
        throw new Error("Birthdate cannot be in the future");
      }
      return true;
    }),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({
        status: "fail",
        field: errors.array()[0].param,
        message: errors.array()[0].msg,
      });
    }

    const token = req.cookies.token;
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
          message: "user is not authenticated",
        });
      }

      const existingUser = await User.findOne({ mobile: decoded.Number });
      
      if (!existingUser) {
        return res.status(404).json({
          isLoggedIn: false,
          message: "User not found",
        });
      }
      if (req.file) {
        existingUser.profileImage = req.file.path;
      }
      existingUser.name = req.body.Name;
      if (req.body.Email) {
        existingUser.email = req.body.Email;
      }
      if (req.body.Address) {
        existingUser.birthday = req.body.Address;
      }
      if (req.body.Birthdate) {
        existingUser.birthday = req.body.Birthdate;
      }
      existingUser.gender = req.body.Gender;
      await existingUser.save();
      
      return res.status(201).json({
        status:"success",
        message:"details are added",
      })

    } catch (error) {
      console.error("Error add user details:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
];
