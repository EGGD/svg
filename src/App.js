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
        <svg width="200" height="200" viewBox="0 0 200 200">
          <line x1="10" y1="10" x2="110" y2="10" fill="none" strokeWidth="12" stroke="#666" strokeLinecap="round" />
          <line x1="10" y1="10" x2="110" y2="10" fill="none" strokeWidth="12" stroke="#FC4D04" strokeDasharray="100" strokeDashoffset="20" strokeLinecap="round" />
          <circle cx="60" cy="80" r="54" fill="none" stroke="#666" strokeWidth="12" strokeLinecap="round" />
          <circle cx="60" cy="80" r="54" fill="none" stroke="#FC4D04" strokeWidth="12" strokeDasharray="339" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
}

export default App;
