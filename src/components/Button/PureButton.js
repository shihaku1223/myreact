import React from 'react';
import PropTypes from 'prop-types';

class PureButton extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  static defaultProps = {
    text: 'Button',
    className: 'pure-button pure-button-primary',
    color: 'blue'
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }

  componentDidMount() {
  }

  componentWillMount() {
  }

  handleClick() {
    console.log('test');
  }

  render() {
    return(
      <button type={ this.props.className }
        className={ this.props.className }
        onClick={ this.handleClick }>
        { this.props.text }
      </button>
    );
  }
}

export default PureButton;
