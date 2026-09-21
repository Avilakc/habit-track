import { Router } from 'express';
import { getQuote } from '../controllers/quote.controller.js';

const router = Router();

router.get('/', getQuote);

export default router;