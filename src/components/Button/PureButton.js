import React from 'react';
import PropTypes from 'prop-types';

class PureButton extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  static defaultProps = {
    text: 'Button',
    className: 'pure-button pure-button-primary',
    color: 'blue'
  }

  static style = {
    width: '75px'
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }

  render() {
    const { className, onClick } = this.props;
    return(
      <button
        style={PureButton.style}
        className={className}
        onClick={onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default PureButton;
