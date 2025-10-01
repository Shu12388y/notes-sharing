import express from "express";
import { UserController } from "../controllers/user-controller.js";

export const userRouter = express.Router();

userRouter.post("/signup", UserController.SignUp);
userRouter.post("/signin", UserController.SignIN);
userRouter.patch("/forgetpassword", UserController.forgetPassword);