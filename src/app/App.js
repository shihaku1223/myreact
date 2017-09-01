import React, { Component } from 'react';
import logo from '../images/logo.jpg';
import './App.css';

import CanvasView from './CanvasView'
import MyButton from '../components/MyButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <CanvasView />
        <MyButton />
      </div>
    );
  }
}

export default App;
