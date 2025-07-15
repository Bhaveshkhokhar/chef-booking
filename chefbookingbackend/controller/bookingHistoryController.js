const  BookingHistory=require("../model/bookingHistory");
const User=require("../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET_KEY;

exports.getYourBookingsHistory=async(req,res,next)=>{
const token = req.cookies.user_token;
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
        message: "user is not authenticated please login",
      });
    }

    const existingUser = await User.findOne({ mobile: decoded.Number });

    if (!existingUser) {
      return res.status(404).json({
        isLoggedIn: false,
        message: "User not found please sign in",
      });
    }
    const bookings = await BookingHistory.find({ user_id: existingUser._id }).populate(
      "chef_id",
      "name profileImage _id type"
    );

    return res.status(201).json({
      userBookingHistoryData: bookings,
      status: "success",
    });
  } catch (error) {
    console.error("Error while send user detail:", error);
    return res
      .status(500)
      .json({ message: "Internal server error please try after some time" });
  }
};