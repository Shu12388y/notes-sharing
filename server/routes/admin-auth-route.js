import express from "express";
import { AdminController } from "../controllers/admin-controller.js";

export const adminRouter = express.Router();

adminRouter.post("/admin-signup", AdminController.SignUp);
adminRouter.post("/admin-signin", AdminController.SignIN);
// adminRouter.patch("/forgetpassword", UserController.forgetPassword);
