import React, { Component } from 'react';
class CircleAndLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      circleInit: {
        //字体颜色
        svgTextColor: '#000',
        //线条颜色
        svgLineColor: '#000',
        //svg高度
        svgCircleHeight: "100",
        //svg宽度
        svgCircleWidth: "100",
        //C的度数
        svgCircleFillValueC: 94,
        svgCircleUnFillValueC: parseInt(Math.random() * 94),
        //M的度数
        svgCircleFillValueM: 94,
        svgCircleUnFillValueM: parseInt(Math.random() * 94),
        //Y的度数
        svgCircleFillValueY: 94,
        svgCircleUnFillValueY: parseInt(Math.random() * 94),
        //K的度数
        svgCircleFillValueK: 94,
        svgCircleUnFillValueK: parseInt(Math.random() * 94),
        //R的度数
        svgCircleFillValueR: 121,
        svgCircleUnFillValueR: parseInt(Math.random() * 121),
        //G的度数
        svgCircleFillValueG: 121,
        svgCircleUnFillValueG: parseInt(Math.random() * 121),
        //B的度数
        svgCircleFillValueB: 121,
        svgCircleUnFillValueB: parseInt(Math.random() * 121),
        //圆圈的颜色
        svgCircleColor: '#000',
        //圆圈线条的颜色
        svgCircleLineWidth: '6',
        //里圆圈的透明度
        svgCircleOpacity: '0.3'
      }
    }
  }
  componentDidMount() {
    this.svgInit()
    console.log(this.state.circleInit);
    // this.setSvgNumber();
  }
  svgInit() {
    let oldCircleInit = this.state.circleInit;
    let newCircleInit = this.props;
    for (const key in newCircleInit) {
      if (oldCircleInit.hasOwnProperty(key)) {
        //单个园255最大的值计算
        // key === 'svgCircleOneUnFillValue' ? oldCircleInit[key] = (255 - newCircleInit[key])/2.7 : oldCircleInit[key] = newCircleInit[key];
        if (key === 'svgCircleUnFillValueC' || key === 'svgCircleUnFillValueM' || key === 'svgCircleUnFillValueY' || key === 'svgCircleUnFillValueK') {
          oldCircleInit[key] = (255 - newCircleInit[key]) / 2.7;
        }else if(key === 'svgCircleUnFillValueR' || key === 'svgCircleUnFillValueG' || key === 'svgCircleUnFillValueB'){
          oldCircleInit[key] = (255 - newCircleInit[key]) / 2.1;
        }else {
          oldCircleInit[key] = newCircleInit[key];
        };
      };
    };
    this.newSetSvgNumber("svgCircleFillValueC", "svgCircleUnFillValueC");
    this.newSetSvgNumber("svgCircleFillValueM", "svgCircleUnFillValueM");
    this.newSetSvgNumber("svgCircleFillValueY", "svgCircleUnFillValueY");
    this.newSetSvgNumber("svgCircleFillValueK", "svgCircleUnFillValueK");
    this.newSetSvgNumber("svgCircleFillValueR", "svgCircleUnFillValueR");
    this.newSetSvgNumber("svgCircleFillValueG", "svgCircleUnFillValueG");
    this.newSetSvgNumber("svgCircleFillValueB", "svgCircleUnFillValueB");
  }
  newSetSvgNumber(svgCircleFillValue, svgCircleUnFillValue) {
    let circleInit = this.state.circleInit;
    let fillValue = circleInit[svgCircleFillValue];
    let unFillValue = circleInit[svgCircleUnFillValue];
    let setFillValue;
    if (fillValue == unFillValue) {
      clearTimeout(timeout);
      return;
    };
    if (fillValue > unFillValue) {
      setFillValue = Math.max(unFillValue, fillValue - 1);
    } else {
      setFillValue = Math.min(unFillValue, fillValue + 1);
    };
    circleInit[svgCircleFillValue] = setFillValue;
    this.setState({ circleInit: circleInit });
    clearTimeout(timeout);
    let timeout = setTimeout(() => {
      this.newSetSvgNumber(svgCircleFillValue,svgCircleUnFillValue);
    }, 20);
  }

  componentWillUnmount() {
    // clearTimeout(initSvgNumberSetTime);
  }
  render() {
    let circleInit = this.state.circleInit,
      svgCircleWidth = circleInit.svgCircleWidth,
      svgCircleHeight = circleInit.svgCircleHeight,
      svgLineColor = circleInit.svgLineColor,
      svgTextColor = circleInit.svgTextColor,
      svgCircleColor = circleInit.svgCircleColor,
      svgCircleFillValueC = circleInit.svgCircleFillValueC,
      svgCircleFillValueM = circleInit.svgCircleFillValueM,
      svgCircleFillValueY = circleInit.svgCircleFillValueY,
      svgCircleFillValueK = circleInit.svgCircleFillValueK,
      svgCircleFillValueR = circleInit.svgCircleFillValueR,
      svgCircleFillValueG = circleInit.svgCircleFillValueG,
      svgCircleFillValueB = circleInit.svgCircleFillValueB,
      svgCircleLineWidth = circleInit.svgCircleLineWidth,
      svgCircleOpacity = circleInit.svgCircleOpacity;
    return (
      <div>
        <svg width={svgCircleWidth} height={svgCircleHeight} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 300" >
          <g id="text">
            <text fill={svgCircleColor} transform="matrix(1 0 0 0.9245 72.7471 49.6069)" glyphOrientationVertical="0" writingMode="tb">柏坊灰蓝</text>
            <text fill={svgCircleColor} transform="matrix(0 0.9245 -1 0 67.4405 13.1343)">002</text>
            <text fill={svgCircleColor} transform="matrix(0 0.9035 -1 0 64.9006 172.7432)">baifanghuilan</text>
            <text fill={svgCircleColor} transform="matrix(0 0.9035 -1 0 25.7374 172.7432)">#4e1892</text>
          </g>
          <g id="line">
              {/* R */}
              <line stroke="#666" strokeWidth={3} opacity="0.3" x1="45" y1="171.4" x2="45" y2="293" strokeLinecap="round"/>
              <line strokeDasharray="121" strokeDashoffset={svgCircleFillValueR} stroke={svgCircleColor} strokeWidth={3} x1="45" y1="171.4" x2="45" y2="293" strokeLinecap="round"/>
              {/* G */}
              <line stroke="#666" strokeWidth={3} opacity="0.3" x1="55" y1="171.4" x2="55" y2="293" strokeLinecap="round"/>
              <line strokeDasharray="121" strokeDashoffset={svgCircleFillValueG}  stroke={svgCircleColor} strokeWidth={3} x1="55" y1="171.4" x2="55" y2="293" strokeLinecap="round"/>
              {/* B */}
              <line stroke="#666" strokeWidth={3} opacity="0.3" x1="50.2" y1="171.4" x2="50.2" y2="293" strokeLinecap="round"/>
              <line strokeDasharray="121" strokeDashoffset={svgCircleFillValueB}  stroke={svgCircleColor} strokeWidth={3} x1="50.2" y1="171.4" x2="50.2" y2="293" strokeLinecap="round"/>
          </g>
          <g id="C">
            <circle fill="none" strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} strokeLinecap="round" stroke="#666" cx="36" cy="28.1" r="15" />
            <circle transform="rotate(-90, 36 28.1)" fill="none" strokeDasharray="94" strokeDashoffset={svgCircleFillValueC} strokeWidth={svgCircleLineWidth} strokeLinecap="round" stroke={svgCircleColor} cx="36" cy="28.1" r="15" />
          </g>
          <g id="M">
            <circle fill="none" strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} strokeLinecap="round" stroke="#666" cx="36" cy="69.7" r="15" />
            <circle transform="rotate(-90, 36 69.7)" fill="none" strokeDasharray="94" strokeDashoffset={svgCircleFillValueM} strokeWidth={svgCircleLineWidth} strokeLinecap="round" stroke={svgCircleColor} cx="36" cy="69.7" r="15" />
          </g>
          <g id="Y">
            <circle fill="none" strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} strokeLinecap="round" stroke="#666" cx="36" cy="111.2" r="15" />
            <circle transform="rotate(-90, 36 111.2)" fill="none" strokeDasharray="94" strokeDashoffset={svgCircleFillValueY} strokeWidth={svgCircleLineWidth} strokeLinecap="round" stroke={svgCircleColor} cx="36" cy="111.2" r="15" />
          </g>
          <g id="K">
            <circle fill="none" strokeWidth={svgCircleLineWidth} opacity={svgCircleOpacity} strokeLinecap="round" stroke="#666" cx="36" cy="152.7" r="15" />
            <circle transform="rotate(-90, 36 152.7)" fill="none" strokeDasharray="94" strokeDashoffset={svgCircleFillValueK} strokeWidth={svgCircleLineWidth} stroke={svgCircleColor} strokeLinecap="round" cx="36" cy="152.7" r="15" />
          </g>
          <g id="RGB">
            <rect fill={svgLineColor} x="11.4" y="3.5" width="49.3" height="3.7" strokeLinecap="round"/>
          </g>
        </svg>
      </div>
    );
  }
}

export default CircleAndLine;