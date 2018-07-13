import React, { Component } from 'react';
import './App.css';
import Tick from './Tick';
import Calculator from './Calculator';
class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tick></Tick>
        <Calculator></Calculator>
      </div>
    );
  }
}

export default App;
