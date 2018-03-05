import React, { Component } from 'react';
import Circle from './svg/Circle.js';
import CircleAndLine from './svg/CircleAndLine.js';
import logo from './logo.svg';
import test from './test.svg';
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

    <svg width={800} height={800} xmlns="http://www.w3.org/2000/svg" version="1.1"  viewBox="0 0 595.3 841.9" >
    <switch>
      <g >
        <path fill="#146597" d="M238.4,420.7l-11.3-3.5c-2.8-0.9-4.3-3.8-3.5-6.6l0.2-0.7c0.9-2.8,3.8-4.3,6.6-3.5l11.3,3.5
          c2.8,0.9,4.3,3.8,3.5,6.6l-0.2,0.7C244.1,420,241.1,421.6,238.4,420.7z"/>
        <path fill="#146597" d="M179.3,477.7l1.4,15.8h14.2C194.9,493.5,185.2,488.9,179.3,477.7z"/>
        <path  fill="#146597" d="M261.5,455.5l3.1-9.1l-4.2-5.7C260.5,440.8,263.9,447.9,261.5,455.5z"/>
      <circle fill="#FFFFFF" stroke="#146597" strokeWidth="3" strokeMiterlimit="10" cx="217.5" cy="455.5" r="44.2"/>

      <g>
        <circle opacity="0.1"  fill="none"  stroke="#146597"  strokeWidth="7" strokeMiterlimit="10" cx="217.5" cy="455.5" r="37.4"/>
        <circle transform="rotate(-90, 217.5 455.5)"  strokeDasharray="234"  fill="none" stroke="#146597" strokeWidth="7" strokeMiterlimit="10" cx="217.5" cy="455.5" r="37.4"/>
        <animate attributeName="stroke-dashoffset" begin="0s" from="234" to="20" dur="3s" fill="freeze"  />
      </g>

      <g>
          <circle opacity="0.1" fill="none" stroke="#146597" strokeWidth="7" strokeMiterlimit="10" cx="217.5" cy="455.5" r="27.6"/>
        <circle  transform="rotate(-90, 217.5 455.5)" strokeDasharray="173" fill="none" stroke="green" strokeWidth="7" strokeMiterlimit="10" cx="217.5" cy="455.5" r="27.6"/>
      <animate attributeName="stroke-dashoffset" begin="0s" from="173" to="50" dur="3s" fill="freeze"  />
      </g>

      <g>

        <circle opacity="0.1" fill="none" stroke="#146597" strokeWidth="7" strokeMiterlimit="10" cx="217.5" cy="455.5" r="18.9"/>
        <circle  transform="rotate(-90, 217.5 455.5)" strokeDasharray="118" fill="none" stroke="yellow" strokeWidth="7" strokeMiterlimit="10" cx="217.5" cy="455.5" r="18.9"/>
        <animate attributeName="stroke-dashoffset" begin="0s" from="118" to="100" dur="3s" fill="freeze"  />
      </g>

        <g>
          <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -101.4546 68.0863)" fill="#FFFFFF" cx="207.9" cy="419.3" rx="0.8" ry="2.6"/>
          <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -184.9065 156.0921)" fill="#FFFFFF"cx="198.8" cy="423.1" rx="0.8" ry="2.6"/>

            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -247.4141 260.7654)" fill="#FFFFFF"cx="191.1" cy="429" rx="0.8" ry="2.6"/>
          <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -285.7177 378.718)" fill="#FFFFFF"cx="185.1" cy="436.8" rx="0.8" ry="2.6"/>

            <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -296.2015 505.6345)" fill="#FFFFFF"cx="181.4" cy="445.8" rx="0.8" ry="2.6"/>
          <ellipse fill="#FFFFFF"cx="180.1" cy="455.5" rx="2.6" ry="0.8"/>

            <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -114.223 62.7936)" fill="#FFFFFF"cx="181.4" cy="465.2" rx="2.6" ry="0.8"/>
          <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -212.3125 156.0859)" fill="#FFFFFF"cx="185.1" cy="474.2" rx="2.6" ry="0.8"/>

            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -284.8583 276.2753)" fill="#FFFFFF"cx="191.1" cy="482" rx="2.6" ry="0.8"/>
          <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -323.1596 416.1445)" fill="#FFFFFF"cx="198.8" cy="487.9" rx="2.6" ry="0.8"/>

            <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -320.8753 565.1913)" fill="#FFFFFF"cx="207.9" cy="491.7" rx="2.6" ry="0.8"/>
          <ellipse fill="#FFFFFF"cx="217.5" cy="493" rx="0.8" ry="2.6"/>

            <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -119.5167 75.5679)" fill="#FFFFFF"cx="227.2" cy="491.7" rx="0.8" ry="2.6"/>
          <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -212.3175 183.5031)" fill="#FFFFFF"cx="236.3" cy="487.9" rx="0.8" ry="2.6"/>
          <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -269.3484 313.7195)" fill="#FFFFFF"cx="244" cy="482" rx="0.8" ry="2.6"/>
          <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -285.7171 453.6075)" fill="#FFFFFF"cx="250" cy="474.2" rx="0.8" ry="2.6"/>

            <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -261.3084 589.8727)" fill="#FFFFFF"cx="253.7" cy="465.2" rx="0.8" ry="2.6"/>
          <ellipse fill="#FFFFFF"cx="255" cy="455.5" rx="2.6" ry="0.8"/>

            <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -106.7418 80.8551)" fill="#FFFFFF"cx="253.7" cy="445.8" rx="2.6" ry="0.8"/>
          <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -184.9026 183.4963)" fill="#FFFFFF"cx="250" cy="436.8" rx="2.6" ry="0.8"/>
          <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -231.9042 298.2096)" fill="#FFFFFF"cx="244" cy="429" rx="2.6" ry="0.8"/>
          <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -248.2724 416.1452)" fill="#FFFFFF"cx="236.3" cy="423.1" rx="2.6" ry="0.8"/>

            <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -236.6377 530.2993)" fill="#FFFFFF"cx="227.2" cy="419.3" rx="2.6" ry="0.8"/>
          <ellipse fill="#FFFFFF"cx="217.5" cy="418.1" rx="0.8" ry="2.6"/>
        </g>
        <g>
    
          <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -103.8237 69.0677)" fill="#FFFFFF"cx="210.4" cy="428.8" rx="0.6" ry="1.9"/>
          <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -188.5018 159.6874)" fill="#FFFFFF"cx="203.7" cy="431.6" rx="0.6" ry="1.9"/>
          <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -250.2911 267.7111)" fill="#FFFFFF"cx="198" cy="436" rx="0.6" ry="1.9"/>
          <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -285.7176 388.5407)" fill="#FFFFFF"cx="193.6" cy="441.7" rx="0.6" ry="1.9"/>

            <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -291.6248 516.6834)" fill="#FFFFFF"cx="190.9" cy="448.4" rx="0.6" ry="1.9"/>
          <ellipse fill="#FFFFFF"cx="189.9" cy="455.5" rx="1.9" ry="0.6"/>

            <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -113.2418 65.1626)" fill="#FFFFFF"cx="190.9" cy="462.7" rx="1.9" ry="0.6"/>
          <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -208.7173 159.6812)" fill="#FFFFFF"cx="193.6" cy="469.3" rx="1.9" ry="0.6"/>
          <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -277.9127 279.1523)" fill="#FFFFFF"cx="198" cy="475" rx="1.9" ry="0.6"/>
          <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -313.3371 416.1446)" fill="#FFFFFF"cx="203.7" cy="479.4" rx="1.9" ry="0.6"/>

            <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -309.8264 560.6147)" fill="#FFFFFF"cx="210.4" cy="482.2" rx="1.9" ry="0.6"/>
          <ellipse fill="#FFFFFF"cx="217.5" cy="483.1" rx="0.6" ry="1.9"/>

            <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -117.1476 74.5866)" fill="#FFFFFF"cx="224.7" cy="482.2" rx="0.6" ry="1.9"/>
          <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -208.7222 179.9077)" fill="#FFFFFF"cx="231.4" cy="479.4" rx="0.6" ry="1.9"/>

            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -266.4714 306.7738)" fill="#FFFFFF"cx="237.1" cy="475" rx="0.6" ry="1.9"/>
          <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -285.7172 443.7847)" fill="#FFFFFF"cx="241.5" cy="469.3" rx="0.6" ry="1.9"/>

            <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -265.8851 578.8237)" fill="#FFFFFF"cx="244.2" cy="462.7" rx="0.6" ry="1.9"/>
          <ellipse fill="#FFFFFF"cx="245.2" cy="455.5" rx="1.9" ry="0.6"/>

            <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -107.723 78.4861)" fill="#FFFFFF"cx="244.2" cy="448.4" rx="1.9" ry="0.6"/>
          <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -188.4977 179.9011)" fill="#FFFFFF"cx="241.5" cy="441.7" rx="1.9" ry="0.6"/>

            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -238.8499 295.3326)" fill="#FFFFFF"cx="237.1" cy="436" rx="1.9" ry="0.6"/>
          <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -258.0948 416.1451)" fill="#FFFFFF"cx="231.4" cy="431.6" rx="1.9" ry="0.6"/>

            <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -247.6866 534.8758)" fill="#FFFFFF"cx="224.7" cy="428.8" rx="1.9" ry="0.6"/>
          <ellipse fill="#FFFFFF"cx="217.5" cy="427.9" rx="0.6" ry="1.9"/>
        </g>
      <g>
	
          <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -105.9349 69.9422)" fill="#FFFFFF"cx="212.7" cy="437.3" rx="0.4" ry="1.3"/>
        <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -191.7058 162.8914)" fill="#FFFFFF"cx="208.1" cy="439.2" rx="0.4" ry="1.3"/>
        
          <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -252.8549 273.9007)" fill="#FFFFFF"cx="204.2" cy="442.2" rx="0.4" ry="1.3"/>
        <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -285.7175 397.2943)" fill="#FFFFFF"cx="201.2" cy="446.1" rx="0.4" ry="1.3"/>
        
          <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -287.5463 526.5297)" fill="#FFFFFF"cx="199.3" cy="450.6" rx="0.4" ry="1.3"/>
        <ellipse fill="#FFFFFF"cx="198.7" cy="455.5" rx="1.3" ry="0.4"/>
        
          <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -112.3673 67.2738)" fill="#FFFFFF"cx="199.3" cy="460.4" rx="1.3" ry="0.4"/>
        <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -205.5135 162.8851)" fill="#FFFFFF"cx="201.2" cy="464.9" rx="1.3" ry="0.4"/>
        
          <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -271.723 281.7161)" fill="#FFFFFF"cx="204.2" cy="468.9" rx="1.3" ry="0.4"/>
        <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -304.5838 416.1447)" fill="#FFFFFF"cx="208.1" cy="471.9" rx="1.3" ry="0.4"/>
        
          <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -299.9801 556.5363)" fill="#FFFFFF"cx="212.7" cy="473.7" rx="1.3" ry="0.4"/>
        <ellipse fill="#FFFFFF"cx="217.5" cy="474.4" rx="0.4" ry="1.3"/>
        
          <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -115.0364 73.7121)" fill="#FFFFFF"cx="222.4" cy="473.7" rx="0.4" ry="1.3"/>
        <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -205.5182 176.7038)" fill="#FFFFFF"cx="227" cy="471.9" rx="0.4" ry="1.3"/>
        
          <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -263.9076 300.5842)" fill="#FFFFFF"cx="230.9" cy="468.9" rx="0.4" ry="1.3"/>
        <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -285.7172 435.0312)" fill="#FFFFFF"cx="233.9" cy="464.9" rx="0.4" ry="1.3"/>
        
          <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -269.9636 568.9774)" fill="#FFFFFF"cx="235.8" cy="460.4" rx="0.4" ry="1.3"/>
        <ellipse fill="#FFFFFF"cx="236.4" cy="455.5" rx="1.3" ry="0.4"/>
        
          <ellipse transform="matrix(0.9659 -0.2588 0.2588 0.9659 -108.5975 76.375)" fill="#FFFFFF"cx="235.8" cy="450.6" rx="1.3" ry="0.4"/>
        <ellipse transform="matrix(0.866 -0.5 0.5 0.866 -191.7016 176.6972)" fill="#FFFFFF"cx="233.9" cy="446.1" rx="1.3" ry="0.4"/>
        
          <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -245.0395 292.7688)" fill="#FFFFFF"cx="230.9" cy="442.2" rx="1.3" ry="0.4"/>
        <ellipse transform="matrix(0.5 -0.866 0.866 0.5 -266.8481 416.145)" fill="#FFFFFF"cx="227" cy="439.2" rx="1.3" ry="0.4"/>
        
          <ellipse transform="matrix(0.2588 -0.9659 0.9659 0.2588 -257.5328 538.9542)" fill="#FFFFFF"cx="222.4" cy="437.3" rx="1.3" ry="0.4"/>
        <ellipse fill="#FFFFFF"cx="217.5" cy="436.6" rx="0.4" ry="1.3"/>
      </g>
      </g>
    </switch>
    </svg>


      </div>
    );
  }
}

export default App;
