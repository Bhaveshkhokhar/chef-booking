const express= require("express");
const authRouter=express.Router();
const authController=require("../controller/authController");

authRouter.post("/login",authController.postlogin);
authRouter.post("/signup",authController.postsignup);

module.exports=authRouter;