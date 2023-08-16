import React from 'react';
import ChartBar from './ChartBar'
import './ChartBar.css'

const Chart = (props) => {
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={null}
                    label={dataPoint.label}
                    key={dataPoint.id}
                />))}
        </div>
    )
};

export default Chart