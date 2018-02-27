import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import logo from './logo.svg';
import test from './test.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          开始学习svg来构图并创建动画
        </p>
        <img src={test} alt="test" />        
      </div>
    );
  }
}

export default App;
