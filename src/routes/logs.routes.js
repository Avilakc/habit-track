// AI assistance: Claude (Anthropic) reviewed this code and helped fix bugs where needed.

import { Router } from "express";
import * as logsController from "../controllers/logs.controller.js";

const router = Router();

router.get("/", logsController.list);

export default router;
