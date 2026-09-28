import { Router } from "express";
import * as logsController from "../controllers/logs.controller.js";

const router = Router();

router.get("/", logsController.list);

export default router;
