import React, { Component } from 'react';
class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circleInit: {
        svgTextColor: '#000',
        svgCircleHeight: "100",
        svgCircleWidth: "100",
        svgCircleOneFillValue: 255,
        svgCircleOneUnFillValue: parseInt(Math.random() * 255),
        svgCircleColor: '#000',
        svgCircleLineWidth: '10',
        svgCircleOpacity: '0.3'
      }
    }
  }
  componentDidMount() {
    this.svgInit();
    this.setSvgNumber();
  }
  svgInit() {
    let oldCircleInit = this.state.circleInit;
    let newCircleInit = this.props;
    for (const key in newCircleInit) {
      if (oldCircleInit.hasOwnProperty(key)) {
        key === 'svgCircleOneUnFillValue' ? oldCircleInit[key] = 255 - newCircleInit[key] : oldCircleInit[key] = newCircleInit[key];
      }
    }
  }
  setSvgNumber() {
    let circleInit = this.state.circleInit;
    let fillValue = circleInit.svgCircleOneFillValue;
    let unFillValue = circleInit.svgCircleOneUnFillValue;
    let setFillValue;
    if (fillValue == unFillValue) {
      // this.setState({
      //   svgCircleOneUnFillValue: parseInt(Math.random() * 100)
      // });
      return;
    };
    if (fillValue > unFillValue) {
      setFillValue = Math.max(unFillValue, fillValue - 1);
    } else {
      setFillValue = Math.min(unFillValue, fillValue + 1);
    };
    circleInit.svgCircleOneFillValue = setFillValue;
    this.setState({ circleInit: circleInit });
    clearTimeout(timeout);
    let timeout = setTimeout(() => {
      this.setSvgNumber();
    }, 20);
  }
  componentWillUnmount() {
    // clearTimeout(initSvgNumberSetTime);
  }
  render() {
    let circleInit = this.state.circleInit,
      svgCircleWidth = circleInit.svgCircleWidth,
      svgCircleHeight = circleInit.svgCircleHeight,
      svgTextColor = circleInit.svgTextColor,
      svgCircleColor = circleInit.svgCircleColor,
      svgCircleOneFillValue = circleInit.svgCircleOneFillValue,
      svgCircleLineWidth = circleInit.svgCircleLineWidth,
      svgCircleOpacity = circleInit.svgCircleOpacity;
    return (
      <div>
        <svg width={svgCircleWidth} height={svgCircleHeight} viewBox="0 0 100 100">
          <text x="50%" y="50%" style={{ textAnchor: "middle", dominantBaseline: "middle", fill: svgTextColor }} >{255 - svgCircleOneFillValue}</text>
          <circle cx="50%" cy="50%" r="40.65" fill="none" stroke="#666" strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} strokeLinecap="round" />
          <circle cx="50%" cy="50%" r="40.65" fill="none" stroke={svgCircleColor} strokeWidth={svgCircleLineWidth} strokeDasharray="255" strokeDashoffset={svgCircleOneFillValue} strokeLinecap="round" />
        </svg>
      </div>
    );
  }
}

export default Circle;
