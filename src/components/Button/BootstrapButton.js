import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

class BootstrapButton extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  static defaultProps = {
    text: 'Button',
    className: 'btn-dark',
    color: 'blue'
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }

  render() {
    const { className, onClick, style } = this.props;
    return(
      <button
        type='button'
        style={style}
        className={classes('btn', this.props.className)}
        onClick={onClick}>
        {this.props.text}
      </button>
    );
  }
}

export default BootstrapButton;
