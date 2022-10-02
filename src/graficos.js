import './App.css';
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales"],
  ["2013", 1000 ],
  ["2014", 1170 ],
  ["2015", 660 ],
  ["2016", 1030],
];

export const options = {
  title: "Bitcoin",
  titleTextStyle: {color: "white"},
  backgroundColor: "#18191a",
  hAxis: { title: "Year", titleTextStyle: { color: "#b0b0a3" }, textStyle: {color: "white"} },
  vAxis: { minValue: 0, textStyle: {color: "white"} },
  legend: {textStyle: {color: "white"} },
  chartArea: { width: "50%", height: "70%" },
};

const Grafico = () => {
  return (
    <div className='Grafico'>
      <h1>Graficos em React</h1>
      <div className='rola'>
        <Chart 
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
      </div>
    
    </div>
  );
}

export default Grafico;
