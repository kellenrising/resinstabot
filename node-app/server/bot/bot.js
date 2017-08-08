// bot.js
// Controls for the python bot

// For reading from the bot's log file
var fs = require("fs");
var PythonShell = require("python-shell");

import { BotSettings, default_settings } from './BotSettings';

class Bot {
  constructor() {
    this.settings = new BotSettings(default_settings);

    this.DEBUG_ENABLED = true;

    this.APP_PATH      = "./";
    this.BOT_PATH      = this.APP_PATH + "bot/";
    this.BOT_FILE_NAME = "start-bot.py";
    this.BOT_PARAMS    = this.BOT_PATH + "json/bot_parameters.json";
    this.LOG_PATH      = this.APP_PATH + "bot/logs/";
    this.LOG_PREFIX    = "bot";
    this.KILL_PROCESS  = "pkill -f " + this.BOT_FILE_NAME;

    this.isRunning     = false;
    this.timeStamp     = 0;
    this.logFile       = "";
    this.logContents   = "";
    this.process       = require("child_process");
    this.pyshell       = null;
    this.parameters    = null;

    this.debugLog("new Bot object created.");
    this.loadParameters(this.BOT_PARAMS);
  }

  getNewTimeStamp() {
    return "" +  new Date().getTime();
  }

  debugLog(text) {
    if(this.DEBUG_ENABLED) { console.log("Bot Debug:  " + text); }
  }

  onProcessOutput(output) {
    console.log(output);
  }

  loadParameters(jsonFile) {
    // Read in the json data
    fs.readFile(jsonFile, "utf8", (err, data) => {
      if (err) { throw err; };
      this.parameters = JSON.parse(data).bot_parameters;
    });
  }

  beginProcess() {
      // Begins the process
      this.pyshell = new PythonShell(this.BOT_FILE_NAME, {
        mode:       "text",
        pythonPath: "python3",
        scriptPath: this.BOT_PATH
      });
      // Send the params to the python code
      this.pyshell.send(JSON.stringify(this.parameters)).end();
      // Handle output from the process
      this.pyshell.on("message", this.onProcessOutput);
      // Handle errors (needed for normal exit code, otherwise raises an exception)
      this.pyshell.on("error", (err) => {
        // Error code 0 means the process exited normally.
        if (err.exitCode != 0)
          this.debugLog(err);
      });
      // Called at the end of the process
      this.pyshell.on("close", () => {
        this.debugLog("Process ended.");
      });
      this.debugLog("Starting python-shell bot process.");
  }

  endProcess() {
    this.process.exec(this.KILL_PROCESS);
    this.debugLog("Stopping python-shell bot process.");
  }

  // Starting the bot
  start() {
    this.debugLog("start() called.");
    if (!this.isRunning) {
      // Set a new time stamp for the log file
      this.timeStamp   = this.getNewTimeStamp();
      this.logFile     = "";
      this.logContents = "";

      // python-shell start
      this.beginProcess();
      this.isRunning = true;
//      this.debugLog("Logging to file:  "+this.logFile);
    } else {
      this.debugLog("bot already started.");
    }
  }

  // Starting the bot with parameters
  startWithParams(json_data) {
    this.debugLog("startWithParams() called.");
    if (!this.isRunning) {
      // Set a new time stamp for the log file
      this.timeStamp   = this.getNewTimeStamp();
      this.logFile     = "";
      this.logContents = "";
      // Set new parameter values
      this.parameters = json_data.bot_parameters;
      // python-shell start
      this.beginProcess();
      this.isRunning = true;
//      this.debugLog("Logging to file:  "+this.logFile);
    } else {
      this.debugLog("bot already started.");
    }
  }

  // Stopping the bot
  stop() {
    this.debugLog("stop() called.");
    if (this.isRunning) {
      // python-shell stop
      this.endProcess();
      this.isRunning = false;
    } else {
      this.debugLog("bot already stopped.");
    }
  }
}

export default Bot;
