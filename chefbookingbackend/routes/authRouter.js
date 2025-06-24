const express= require("express");
const authRouter=express.Router();
const authController=require("../controller/authController");


authRouter.get("/checkauthstatus",authController.getAuthStatus);
authRouter.post("/login",authController.postlogin);
authRouter.post("/otpverification",authController.postotpverification);
authRouter.post("/logout",authController.postlogout);
authRouter.post("/signup",authController.postsignup);


module.exports=authRouter;