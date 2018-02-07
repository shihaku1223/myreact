import React from 'react';

const HOC = (Component) => class extends React.Component {
  constructor(props) {
    super(props);
  }
  // do whatever you may want
  render() {
    // pass new properties to wrapped component
    return <Component {...this.props} {...this.state} />
  }
};

export default HOC;
