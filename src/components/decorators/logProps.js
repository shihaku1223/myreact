import React from 'react';

const logProps = (Component) => {
  return class extends React.Component {

    componentWillReceiveProps(nextProps) {
      console.log('Current props:', this.props);
      console.log('Next props:', nextProps);
    }

    render() {
      // Wraps the input component in a container, without mutating it.
      return <Component {...this.props} />;
    }
  }
};

export default logProps;
