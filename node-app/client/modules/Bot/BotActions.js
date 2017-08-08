// BotActions.js

import callApi from '../../util/apiCaller';

// Export Constants
export const BOT_START = 'BOT_START';
export const BOT_STOP = 'BOT_STOP';
export const BOT_READ_LOG = 'BOT_READ_LOG';

// For testing
const TEST_ALERT_ENABLED = true;
function test_alert(text) {
  if (TEST_ALERT_ENABLED) { alert(text); }
}

// Bot Actions
export function startBot() {
  test_alert("Bot Callback:  startBot()");
  return {
    type: BOT_START,
  };
};

export function startBotRequest() {
  test_alert("Bot Action:  startBotRequest()");
  return (dispatch) => {
    return callApi('bot/start', 'post').then(res => {
      dispatch(startBot());
    });
  };
}

export function startBotWithJsonRequest(json_data) {
  test_alert("Bot Action:  startBotWithJsonRequest(json_data)");
  return (dispatch) => {
    return callApi('bot/startWithParams', 'post', json_data).then(res => {
      dispatch(startBot());
    });
  };
}

export function stopBot() {
  test_alert("Bot Callback:  stopBot()");
  return {
    type: BOT_STOP,
  };
};

export function stopBotRequest() {
  test_alert("Bot Action:  stopBotRequest()");
  return (dispatch) => {
    return callApi('bot/stop', 'post').then(res => {
      dispatch(stopBot());
    });
  };
}
