import React, { Component } from 'react';
import s from '../sss.css';
class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "name"
        }
        setTimeout(() => {
            this.setState({
                value: "value"
            })
        }, 3000)
    }
    componentWillUnmount() {
        // clearTimeout(initSvgNumberSetTime);
    }
    render() {
        return (
            <div>
                <svg viewBox="0 0 600 300">
                    <clipPath id="cp-text">
                        <text textAnchor="middle"
                            x="50%"
                            y="50%"
                            dy=".35em"
                            className="text--line"
                        >
                            {this.state.value}
                        </text>
                    </clipPath>
                    <g clipPath="url(#cp-text)" className="shadow">
                        <rect
                            width="100%"
                            height="100%"
                            className="anim-shape anim-shape--shadow"
                        ></rect>
                    </g>


                </svg>
            </div >
        );
    }
}

export default Text;
