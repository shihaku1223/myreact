import React, { Component } from 'react';

import MainFrame from 'components/MainFrame';

class App extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <MainFrame>
        {this.props.children}
      </MainFrame>
    );
  }
}

export default App;
