import express from "express";
import { SubjectController } from "../controllers/subject-controller.js";
import { ResourceController } from "../controllers/resource-controller.js";
import { ContentController } from "../controllers/content-controller.js";
import { adminMiddleware,userMiddleware } from "../middlewares/middleware.js";

export const resourceRouter = express.Router()

resourceRouter.post("/subject",adminMiddleware,SubjectController.createSubject);
resourceRouter.patch("/subject",SubjectController.updateSubject);
resourceRouter.delete("/subject/:id",SubjectController.deleteSubject);
resourceRouter.get("/subjects",SubjectController.getAllSubjects);
resourceRouter.get("/subject/:id",SubjectController.getSubjects);


resourceRouter.post("/resource", ResourceController.createResource);
resourceRouter.patch("/resource",ResourceController.updateResource);
resourceRouter.delete("/resource/:id",ResourceController.deleteResource);
resourceRouter.get("/resources",ResourceController.getAllResource);
resourceRouter.get("/resource/:id",ResourceController.getResource);
resourceRouter.get("/resources/:id",ResourceController.getResourceBySubjectID);



resourceRouter.post("/content",ContentController.createContent);
resourceRouter.patch("/content",ContentController.updateContent);
resourceRouter.delete("/content/:id",ContentController.deleteContent);
resourceRouter.get("/contents",ContentController.getAllContents);
resourceRouter.get("/content/:id",ContentController.getContent);
resourceRouter.get("/contents/:id",ContentController.getContentsByResource);
resourceRouter.get("/download",userMiddleware,ContentController.downloadContent);