// bot.controller.js

// Import and initialize the bot
import Bot from '../bot/bot';
const bot = new Bot();

// Starts the bot
export function start(req, res) {
  bot.start();
//  let message = "BotController:  start called";
//  res.json({ message });
  res.status(200).end();
}

export function startWithParams(req, res) {
  bot.startWithParams(req.body);
  res.status(200).end();
};

// Stops the bot
export function stop(req, res) {
  bot.stop();
//  let message = "BotController:  stop called";
//  res.json({ message });
  res.status(200).end();
}
