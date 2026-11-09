// AI assistance: Claude (Anthropic) reviewed this code and helped fix bugs where needed.

import { Router } from 'express';
import { getQuote } from '../controllers/quote.controller.js';

const router = Router();

router.get('/', getQuote);

export default router;