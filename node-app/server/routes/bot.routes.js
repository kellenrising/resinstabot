// bot.routes.js

import { Router } from 'express';
import * as BotController from '../controllers/bot.controller';
const router = new Router();

// Start bot
router.route('/bot/start').post(BotController.start);

// Start bot with parameters
router.route('/bot/startWithParams').post(BotController.startWithParams);

// Stop bot
router.route('/bot/stop').post(BotController.stop);

export default router;
