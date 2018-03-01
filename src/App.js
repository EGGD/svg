import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import logo from './logo.svg';
import test from './test.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svglineOneFillValue: 100,
      svglineOneUnFillValue: parseInt(Math.random() * 100),
    }
  }
  componentDidMount() {
   let initSvgNumberSetTime= setTimeout(() => {
      this.setSvgNumber();
    }, 1000);
  }
  setSvgNumber() {
    let fillValue = this.state.svglineOneFillValue;
    let unFillValue = this.state.svglineOneUnFillValue;
    let setFillValue;
    if (fillValue == unFillValue) {
      this.setState({
        svglineOneUnFillValue: parseInt(Math.random() * 100)
      });
    };
    if (fillValue > unFillValue) {
      setFillValue = Math.max(unFillValue, fillValue - 1);
    } else {
      setFillValue = Math.min(unFillValue, fillValue + 1);
    };
    this.setState({ svglineOneFillValue: setFillValue });
    clearTimeout(timeout);        
    let timeout = setTimeout(() => {
      this.setSvgNumber();          
    }, 50);
  }
  componentWillUnmount(){
    clearTimeout(initSvgNumberSetTime);
  }
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
          <line x1="10" y1="10" x2="110" y2="10" fill="none" strokeWidth="12" stroke="#FC4D04" strokeDasharray="100" strokeDashoffset={this.state.svglineOneFillValue} strokeLinecap="round" />
          <text x="45%" y="52%" >{this.state.svglineOneFillValue}</text>
          <circle cx="50%" cy="50%" r="54" fill="none" stroke="#666" strokeWidth="12" strokeLinecap="round" />
          <circle cx="50%" cy="50%" r="54" fill="none" stroke="#FC4D04" strokeWidth="12" strokeDasharray="339"  strokeDashoffset={this.state.svglineOneFillValue} strokeLinecap="round" />
        </svg>
        <svg width="200" height="200" viewBox="0 0 200 200"  >
          <polygon  strokeDasharray="339" fill="none" stroke="#666" strokeDashoffset={this.state.svglineOneFillValue} points="66.2,41.2 38.8,91 64.2,153.8 154,155.5 175,90.8 135.5,38.8 "/>
        </svg>

      </div>
    );
  }
}

export default App;
