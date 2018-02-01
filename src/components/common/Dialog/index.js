import React from 'react';
import PropTypes from 'prop-types';

import View from 'component/View';

const DIALOG_STATE_OPEN = 'DIALOG_STATE_OPEN';
const DIALOG_STATE_CLOSE = 'DIALOG_STATE_CLOSE';

class Dialog extends React.Comonent {

  static defaultProps = {
    width: 300,
    height: 100,
    show: false
  }

  constructor(props) {
    super(props);
    this.state = {
      dialogState: DIALOG_STATE_CLOSE
    };
  }

  render() {
    return (
      <View>
      </View>
    );
  }
}
