// BotReducer.js

import { BOT_START, BOT_STOP, BOT_READ_LOG } from './BotActions';

const initialState = {
  botStarted: false,
  logText: "",
};

const BotReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOT_START :
      return {
        botStarted: true,
        logText: state.logText,
      };

    case BOT_STOP :
      return {
        botStarted: false,
        logText: state.logText,
      };

    case BOT_READ_LOG :
      return {
        botStarted: state.botStarted,
        logText: action.logText,
      };

    default:
      return state;
  }
};

export default BotReducer;
