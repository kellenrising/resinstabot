// BotInterfacePage.js

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import style
import styles from './BotInterfacePage.css';

// Bot actions
import { startBotRequest, stopBotRequest, startBotWithJsonRequest } from '../BotActions';

// Default bot parameters
var botJsonData = require('/home/ubuntu/dev/mern-test-app/bot/json/bot_parameters.json');
var botParameters = botJsonData.bot_parameters;

var types = {
  'get': function(prop) {
    return Object.prototype.toString.call(prop);
  },
  'Object':  '[object Object]',
  'Array':   '[object Array]',
  'String':  '[object String]',
  'Boolean': '[object Boolean]',
  'Number':  '[object Number]'
};

class BotInterfacePage extends Component {
  componentDidMount() {
    // Initialization code
    this.setDefaults();
  }

  // Starting and stopping the bot
  handleStartBot = () => { this.props.dispatch(startBotRequest()); };
  handleStopBot  = () => { this.props.dispatch(stopBotRequest()); };

  setDefaults = () => {
    let value, valueString;
    Object.keys(botParameters).forEach((key) => {
      value       = botParameters[key];
      valueString = JSON.stringify(value);

      valueString = valueString.replace(/\s+|"+|\[+|\]+|{+|}+/g, '');
      valueString = valueString.replace(/,+/g, ', ');

      this.refs[key].value = valueString;
    });
  };

  // Starting the bot with the given parameters
  handleStartBotWithParams = () => {
    let json_data = { "bot_parameters": {} };
    let refValue, valueArray;

    Object.keys(botParameters).forEach((key) => {
      refValue = this.refs[key].value;

      if (this.refs[key].type == "number") {
        json_data.bot_parameters[key] = parseInt(this.refs[key].value);
      } else {
        refValue = refValue.replace(/\s+/g, '');
        valueArray = refValue.split(',');
        if (valueArray.length <= 1)
          if (key == "user_blacklist")
            json_data.bot_parameters[key] = {};
          else
            json_data.bot_parameters[key] = refValue;
        else
          json_data.bot_parameters[key] = valueArray;
      }
    });

    //alert(JSON.stringify(json_data, null, 2));
    this.props.dispatch(startBotWithJsonRequest(json_data));
  };

  // Render the html
  render() {
    return (
      <div className={styles['form']}>
        <div className={styles['form-content']}>
          <h2 className={styles['form-title']}>Bot Form</h2>
<p>Login</p>
<input ref="login" placeholder="Login" type="text" className={styles['form-field']} />
<p>Password</p>
<input ref="password" placeholder="Password" type="text" className={styles['form-field']} />
<p>Likes per day</p>
<input ref="like_per_day" placeholder="1000" min="0" max="1000" type="number" className={styles['form-field']} />
<p>Comments per day</p>
<input ref="comments_per_day" placeholder="0" min="0" max="200" type="number" className={styles['form-field']} />
<p>Tag list</p>
<textarea ref="tag_list" placeholder="tag list" className={styles['form-field']} />
<p>Tag blacklist</p>
<textarea ref="tag_blacklist" placeholder="tag blacklist" className={styles['form-field']} />
<p>User blacklist</p>
<textarea ref="user_blacklist" placeholder="user blacklist" className={styles['form-field']} />
<p>Max likes for one tag</p>
<input ref="max_like_for_one_tag" placeholder="50" min="0" max="1000" type="number" className={styles['form-field']} />
<p>Follows per day</p>
<input ref="follow_per_day" placeholder="300" min="0" max="1000" type="number" className={styles['form-field']} />
<p>Follow time (seconds)</p>
<input ref="follow_time" placeholder="60" min="0" max="10000" type="number" className={styles['form-field']} />
<p>Unfollows per day</p>
<input ref="unfollow_per_day" placeholder="300" min="0" max="1000" type="number" className={styles['form-field']} />
<p>Unfollow pause time minimum (seconds)</p>
<input ref="unfollow_break_min" placeholder="15" min="0" max="10000" type="number" className={styles['form-field']} />
<p>Unfollow pause time maximum (seconds)</p>
<input ref="unfollow_break_max" placeholder="30" min="0" max="10000" type="number" className={styles['form-field']} />
<p>Log mode</p>
<input ref="log_mod" placeholder="0" min="0" max="1" type="number" className={styles['form-field']} />
<p>Log file name</p>
<input ref="log_file_name" placeholder="log file name" type="text" className={styles['form-field']} />
<p>Proxy server</p>
<input ref="proxy" placeholder="proxy server" type="text" className={styles['form-field']} />
<p>Unwanted username list</p>
<textarea ref="unwanted_username_list" placeholder="unwanted username list" className={styles['form-field']} />
<p>Unfollow whitelist</p>
<textarea ref="unfollow_whitelist" placeholder="unfollow whitelist" className={styles['form-field']} />

<div>
<a className={styles['post-submit-button']} href="#" onClick={this.handleStartBotWithParams}>Start</a>
</div>
<br />
<div>
<a className={styles['post-submit-button']} href="#" onClick={this.handleStopBot}>Stop</a>
</div>
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return { };
}

BotInterfacePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

BotInterfacePage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(BotInterfacePage);
