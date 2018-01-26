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

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }

  componentDidMount() {
  }

  componentWillMount() {
  }

  handleClick = () => {
    console.log('test');
  }

  render() {
    const { className, onClick } = this.props;
    return(
      <button
        className={ className }
        onClick={ onClick }>
        { this.props.text }
      </button>
    );
  }
}

export default PureButton;
