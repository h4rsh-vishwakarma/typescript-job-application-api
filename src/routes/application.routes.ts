import { Router } from "express";
import {
  createApplication,
  getApplicationById,
  updateApplicationStatus
} from "../controllers/application.controller";

const router = Router();

router.post("/", createApplication);
router.get("/:id", getApplicationById);
router.patch("/:id/status", updateApplicationStatus);

export default router;