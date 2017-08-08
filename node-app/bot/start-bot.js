// start-bot.js

// Requirements
var fs = require("fs");
var child_process = require("child_process");

// Start the bot's python process
var bot_process = child_process.spawn("python3", ["start-bot.py"]);

bot_process.stdout.on("data", (data) => {
  var message = "" + data;
  console.log(message);
});
