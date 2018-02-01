import React from 'react';
import PropTypes from 'prop-types';

class View extends React.Comonent {

  static propTypes = {
    onClick: PropTypes.func,
    onHide: PropTypes.func,
    onShow: PropTypes,func,
    show: PropTypes.bool
  }

  static defaultProps = {
    width: 300,
    height: 100,
    show: false,
    onHide: () => {}
  }

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { show, children } = this.props; 
    return (
      <div>
        {children}
      </div>
    );
  }
}
