import { Router } from 'express';
import * as habitsController from '../controllers/habits.controller.js';
import { validate } from '../middlewares/validate.js';
import { createHabitSchema, createLogSchema } from '../schemas/habit.schema.js';

const router = Router();

router.get('/', habitsController.list);
router.post('/', validate(createHabitSchema), habitsController.create);
router.delete('/:id', habitsController.remove);

router.post('/:id/logs', validate(createLogSchema), habitsController.createLog);
router.delete('/:id/logs/:date', habitsController.removeLog);
router.get('/:id/logs', habitsController.listLogs);

export default router;