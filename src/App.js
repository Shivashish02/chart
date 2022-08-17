import './App.css';
import { useState, useEffect } from "react";
import Barchart from './components/barchart';
import Scatterchart from './components/scatterchart';
import wineData from "./data/Wine-Data";

function App() {
  const [data, setData] = useState([]);                      //state for storing bar data
  const [datascatter, setDatascatter] = useState([]);        //state for storing scatter data

  useEffect(() => {                         //useEffect for generating the data required by both the charts from the wine dataset
    let bardata = [{ sum: 0, count: 0 }, { sum: 0, count: 0 }, { sum: 0, count: 0 }]
    let scatterdata = []
    let arr = wineData
    arr.forEach((elem) => {
      scatterdata.push([parseFloat(elem["Color intensity"]), parseFloat(elem["Hue"])])
      bardata[(parseInt(elem["Alcohol"]) - 1)].sum += parseFloat(elem["Malic Acid"])
      bardata[(parseInt(elem["Alcohol"]) - 1)].count = bardata[parseInt(elem["Alcohol"]) - 1].count + 1
    })
    setDatascatter(scatterdata)
    setData(bardata.map(elem => elem.sum / elem.count))
  }, [])
  return (
    <div className="App">
      <Scatterchart data={datascatter} xname="Color Intensity" yname="Hue" />
      <Barchart bardata={data} xname="Alcohol category" yname="Average of Malic Acid" />
    </div>
  );
}

export default App;
