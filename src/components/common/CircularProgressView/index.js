import React from 'react';
import PropTypes from 'prop-types';
import MainContentView from 'components/MainContentView';
import { CircularProgress } from 'material-ui/Progress';

class CircularProgressView extends React.Component {

  static style = {
    margin: '5px 5px 5px 5px',
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContentView>
        <CircularProgress size={80} thickness={5} />
      </MainContentView>
    );
  }
}

export default CircularProgressView;
