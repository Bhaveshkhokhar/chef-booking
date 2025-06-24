const { Contact } = require("../model/contact");
const { check, validationResult } = require("express-validator");
exports.createContact = [
  check("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2 })
    .withMessage("Name must be at least 2 characters long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Name must contain only letters and spaces"),
  check("mobile")
    .trim()
    .notEmpty()
    .withMessage("Number is required")
    .isLength({ min: 10, max: 10 })
    .withMessage("Mobile number must be 10 digits")
    .isNumeric()
    .withMessage("Mobile number must contain only digits"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  check("city")
    .trim()
    .notEmpty()
    .withMessage("City is required")
    .isIn([
      "Delhi",
      "Mumbai",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Kolkata",
      "Lucknow",
      "Pune",
    ])
    .withMessage("City must be one of the specified options"),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({
        status: "fail",
        field: errors.array()[0].param,
        message: errors.array()[0].msg,
      });
    }
    const { name, email, city, mobile, message } = req.body;

    try {
      const contact = new Contact({
        name,
        email,
        city,
        mobile,
        message,
      });

      await contact.save();
      res
        .status(201)
        .json({ message: "Request created successfully", contact });
    } catch (error) {
      console.error("Error creating contact:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
];
