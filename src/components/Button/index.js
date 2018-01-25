import React from 'react';
import PropTypes from 'prop-types';

import Button from 'material-ui/Button';

class TextButton extends React.Component {

  constructor(props, context) {
    super(props, context)
  }

  static defaultProps = {
    text: 'Button',
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
    const classes = this.props;
    return(
      <div className={classes.root}>
        <Button
          raised color="primary"
          className={classes.button}
          onClick={this.handleClick}>
          {this.props.text}
        </Button>
      </div>
    );
  }
}

export default TextButton;
