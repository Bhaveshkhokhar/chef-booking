const express= require("express");
const userRouter=express.Router();
const userController=require("../controller/userController");

userRouter.post("/addUserData",userController.userAdd);

module.exports=userRouter;