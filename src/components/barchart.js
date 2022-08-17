import React from 'react';
import ReactECharts from 'echarts-for-react';

//Reusable component for barcharts, takes props as x-axis name,y- axis name and bardata

const Barchart = (props) => {
    let data=Object.keys(props.bardata)
    data=data.map(elem=>{
        return (parseInt(elem)+1)
    })
    const options = {
        xAxis: {
            name: props.xname,
            nameLocation: 'middle',
            nameGap: 30,
            data
        },
        yAxis: {
            name: props.yname,
            nameLocation: 'middle',
            nameGap: 40
        },
        series: [
            {
                data: props.bardata,
                type: 'bar',
                color: "rgb(255, 128, 128)"
            }
        ]
    };

    return <div id="container"><ReactECharts option={options} /></div>
};

export default Barchart;