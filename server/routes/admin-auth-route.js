import express from "express";
import { AdminController } from "../controllers/admin-controller.js";
import { AnalysisController } from "../controllers/analysis-controller.js";
import { adminMiddleware } from "../middlewares/middleware.js";

export const adminRouter = express.Router();

adminRouter.post("/admin-signup", AdminController.SignUp);
adminRouter.post("/admin-signin", AdminController.SignIN);
adminRouter.get("/analysis", AnalysisController.getAllUsers);
