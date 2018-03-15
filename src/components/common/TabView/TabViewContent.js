import React from 'react';
import PropTypes from 'prop-types';
import MainContentView from 'components/MainContentView';

class TabViewContent extends React.Component {

  static style = {
    margin: '5px 5px 5px 5px',
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContentView>
        <div style={TabViewContent.style}>
          {this.props.children}
        </div>
      </MainContentView>
    );
  }
}

export default TabViewContent;
