import React, { Component } from 'react';
import './chart.css';
import { connect } from 'react-redux';
// const Chart = require('react-d3-core').Chart;
// const LineChart = require('react-d3-basic').LineChart;
import { LineChart } from 'react-easy-chart';


function mapStateToProps(state) {
    return {
        priceHistory: state.priceHistory
    };
}

class Chart extends Component {
    render() {
        console.log('chart updates')
        return (
            <LineChart
            xType={'time'}
            datePattern={"%Y-%m-%dT%H:%M:%S.%LZ"}
            axes
            axisLabels={{x: 'Hour', y: 'Percentage'}}
            tickTimeDisplayFormat={"%H:%M"}
            /* grid
            verticalGrid */
            xTicks={5}
            yTicks={5}
            /* xDomainRange={[0, 100]}
            yDomainRange={[0, 100]} */
            lineColors={['red']}
            width={350}
            height={250}
            data={[
              [
                { x: '2017-12-19T16:42:57.000Z', y: 15000 },
                { x: '2017-12-19T17:42:57.000Z', y: 18500 },
                { x: '2017-12-19T18:42:57.000Z', y: 17500 },
                { x: '2017-12-19T19:42:57.000Z', y: 19800 },
                { x: '2017-12-19T20:42:57.000Z', y: 15000 },
                { x: '2017-12-19T21:42:57.000Z', y: 14000 },
                { x: '2017-12-19T22:42:57.000Z', y: 20000 },
                { x: '2017-12-19T23:42:57.000Z', y: 19800 },

              ]
            ]}
          />
        );
    }
}

export default connect(
    mapStateToProps,
)(Chart);