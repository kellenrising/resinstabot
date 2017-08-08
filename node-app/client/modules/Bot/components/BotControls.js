// BotControls.js

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Actions
import { startBotRequest, stopBotRequest } from '../BotActions';

class BotControls extends Component {
  componentDidMount() {
    // Initialization code
  }

  handleStartBot = () => {
    this.props.dispatch(startBotRequest());
  };

  handleStopBot = () => {
    this.props.dispatch(stopBotRequest());
  };

  render() {
    return (
      <div>
        <h3>Bot Controls:</h3>
        <p><a href="#" onClick={this.handleStartBot}>Start bot</a></p>
        <p><a href="#" onClick={this.handleStopBot}>Stop bot</a></p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { };
}

BotControls.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

BotControls.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(BotControls);
