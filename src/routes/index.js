import { Router } from "express";
import habitsRoutes from "./habits.routes.js";
import quoteRoutes from "./quote.routes.js";
import logsRoutes from "./logs.routes.js";

const router = Router();

router.use("/habits", habitsRoutes);
router.use("/quote", quoteRoutes);
router.use("/logs", logsRoutes);

export default router;
