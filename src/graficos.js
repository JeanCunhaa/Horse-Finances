import './App.css';
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "Sales"],
  ["1", 1000 ],
  ["2", 1170 ],
  ["3", 660 ],
  ["4", 1030],
];

export const options = {
  title: "Coin",
  titleTextStyle: {color: "white"},
  backgroundColor: "#201b2c",
  hAxis: { title: "Dia", titleTextStyle: { color: "#b0b0a3" }, textStyle: {color: "white"} },
  vAxis: { minValue: 0, textStyle: {color: "white"} },
  legend: {textStyle: {color: "white"} },
  chartArea: { width: "50%", height: "70%" },
};

const Grafico = () => {
  return (
    <div className='Grafico'>
      <div className='graficox'>
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
