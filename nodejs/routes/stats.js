import { Router } from 'express';
const stats = require('../controllers/stats.controller');

const router = Router();

router.get('/stats', stats.getStats);

export default router;
