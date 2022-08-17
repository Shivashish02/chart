import React from 'react';
import ReactECharts from 'echarts-for-react';

//Reusable component for scatter charts, takes props as x-axis name,y- axis name and scatterdata

const Scatterchart = (props) => {
    const options = {
        xAxis: {
            name: props.xname,
            nameLocation: 'middle',
            nameGap: 30,
        },
        yAxis: {
            name: props.yname,
            nameLocation: 'middle',
            nameGap: 40
        },
        series: [
            {
                symbolSize: 6,
                data: props.data,
                type: 'scatter',
                color: "rgb(132, 3, 252)"
            }
        ]
    };
    return <div id="container"><ReactECharts option={options} /></div>
};

export default Scatterchart;