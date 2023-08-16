import React from 'react';
import ChartBar from './ChartBar'
import './ChartBar.css'

const Chart = (props) => {
    // Create a new array consisting of integers extracted from props.dataPoints
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                    key={dataPoint.id}
                />))}
        </div>
    )
};

export default Chart