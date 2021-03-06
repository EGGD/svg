import React, { Component } from 'react';
import Circle from './svg/Circle.js';
import CircleAndLine from './svg/CircleAndLine.js';
import Text from './svg/Text';
import logo from './logo.svg';
import NewCircle from './svg/NewCircle.js';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      svglineOneFillValue: 255,
      svglineOneUnFillValue: parseInt(Math.random() * 255),
    }
  }
  // componentDidMount() {
  // //  let initSvgNumberSetTime= setTimeout(() => {
  //     //this.setSvgNumber();
  //   // }, 1000);
  // }
  // setSvgNumber() {
  //   let fillValue = this.state.svglineOneFillValue;
  //   let unFillValue = this.state.svglineOneUnFillValue;
  //   let setFillValue;
  //   if (fillValue == unFillValue) {
  //     this.setState({
  //       svglineOneUnFillValue: parseInt(Math.random() * 100)
  //     });
  //   };
  //   if (fillValue > unFillValue) {
  //     setFillValue = Math.max(unFillValue, fillValue - 1);
  //   } else {
  //     setFillValue = Math.min(unFillValue, fillValue + 1);
  //   };
  //   this.setState({ svglineOneFillValue: setFillValue });
  //   clearTimeout(timeout);        
  //   let timeout = setTimeout(() => {
  //     this.setSvgNumber();          
  //   }, 20);
  // }
  // componentWillUnmount(){
  //   clearTimeout(initSvgNumberSetTime);
  // }
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
        {/* <img src={test} alt="test" /> */}
        {/* <svg width="100" height="100" viewBox="0 0 100 100">
          <line x1="10" y1="10" x2="90" y2="10" fill="none" strokeWidth="5" stroke="#666" strokeLinecap="round" />
          <line x1="10" y1="10" x2="90" y2="10" fill="none" strokeWidth="5" stroke="#FC4D04" strokeDasharray="100" strokeDashoffset={this.state.svglineOneFillValue} strokeLinecap="round" />
          <text x="50%" y="50%" style={{textAnchor: "middle", dominantBaseline: "middle"}} >{this.state.svglineOneFillValue}</text>
          <circle cx="50%" cy="50%" r="40.65" fill="none" stroke="#666" strokeWidth="10" opacity="0.3" strokeLinecap="round" />
          <circle cx="50%" cy="50%" r="40.65" fill="none" stroke="#FC4D04" strokeWidth="10"  strokeDasharray="255"  strokeDashoffset={this.state.svglineOneFillValue} strokeLinecap="round" />
        </svg>
        <svg width="200" height="200" viewBox="0 0 200 200"  >
          <polygon  strokeDasharray="339" fill="none" stroke="#666" strokeDashoffset={this.state.svglineOneFillValue} points="66.2,41.2 38.8,91 64.2,153.8 154,155.5 175,90.8 135.5,38.8 "/>
        </svg> */}
        {/* <Circle svgCircleHeight="200" svgCircleWidth="200"  svgCircleColor="#FC4D04" svgCircleOneUnFillValue="50" svgCircleLineWidth="10" />
        <CircleAndLine svgLineColor="#FC4D04" svgCircleHeight="600" svgCircleWidth="200" 
         svgCircleColor="#FC4D04" svgCircleUnFillValueC="50" svgCircleUnFillValueM="50"
         svgCircleUnFillValueY="50" svgCircleUnFillValueK="50" svgCircleLineWidth="6" svgCircleOpacity="0.1"/> */}
        {/* <svg width={100} height={100} viewBox="0 0 100 100">
          <circle cx="50%" cy="50%" r="40.65" fill="none" stroke="#666" strokeWidth={3} opacity={0.3} strokeLinecap="round" />
          <circle cx="50%" cy="50%" r="40.65" fill="none" stroke="#666" strokeWidth={6} strokeDasharray="20" animationFillMode="forwards" strokeLinecap="round" />
          <animate attributeName="stroke-dashoffset" begin="0s" from="0" to="20" dur="3s" fill="freeze"  />
        </svg> */}
        <Text/>
         {/* 新的圆  */}
        {/* <NewCircle/> */}
         
        <svg width={100} height={100} viewBox="0 0 100 100">
          <circle cx="50%" cy="50%" r="40.65" fill="none" stroke="#666" strokeWidth={3} opacity={0.3} strokeLinecap="round" />
          <circle  cx="50%" cy="50%" r="40.65" fill="none" stroke="#666" strokeWidth={3} strokeDasharray="255"  strokeLinecap="round" />
          {/* <animate attributeName="stroke-dashoffset" begin="0s" from="255" to="20" dur="3s" fill="freeze"  /> */}
        </svg>
        {/* svg 如果要线性动画的话需要path来配合 */}
        <svg  width={300} height={300} viewBox="0 0 300 300">
          <path d="M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110"
                stroke="lightgrey" strokeWidth="2"
                fill="none" id="theMotionPath"/>
            <circle r="5" fill="red">
              <animateMotion dur="6s" repeatCount="indefinite">
                <mpath xlinkHref="#theMotionPath"/>
              </animateMotion>
            </circle>
        </svg>
    


      </div>
    );
  }
}

export default App;
