import { Router } from "express";
import habitsRoutes from "./habits.routes.js";
import quoteRoutes from "./quote.routes.js";

const router = Router();

router.use("/habits", habitsRoutes);
router.use("/quote", quoteRoutes);

export default router;
