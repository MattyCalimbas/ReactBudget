import React from 'react';
import './ChartBar.css';

const ChartBar = (props) => {

    let barFillHeight = '0%';

    if (props.max > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar___inner">
                {/* Example of setting dymnamic style using in-line css  */}
                <div className="chart-bar___fill" style={{height:barFillHeight}}></div>
            </div>
            <div className="chart-bar___label">{props.label}</div>
        </div>
    )
}

export default ChartBar