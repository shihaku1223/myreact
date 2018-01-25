import React from 'react';
import logo from '../images/logo.jpg';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';

import { withStyles } from 'material-ui/styles';


import './Main.css';

import Button from '../components/Button';
import PureButton from '../components/Button/PureButton';

class Main extends React.Component {
  render() {
    const classes = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Button />
        <PureButton />
      </div>
    );
  }
}

export default Main;
