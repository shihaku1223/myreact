import React, { Component } from 'react';
import logo from '../images/logo.jpg';


import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

//import MyButton from '../components/MyButton'
//import './App.css';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    const classes = this.props;
    return (
      <div className={classes.root}>
        <Button raised color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
