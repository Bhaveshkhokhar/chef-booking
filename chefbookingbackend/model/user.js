const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  postalCode: String,
  country: {
    type: String,
    default: "India",
  },
});
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String, // URL or file path
    default: "",
  },
  birthday: {
    type: Date,
  },
  address: {
    type:String,  
    default:"",
  },
  gender:{
    type:String,
    enum:["Male","Female","Other"],
    default:"Male",
  }
});
module.exports = mongoose.model("User", UserSchema);
