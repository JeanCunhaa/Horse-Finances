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
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

const Grafico = () => {
  return (
    <div className='Grafico'>
      <h1 className=''>Graficos em React</h1>

      <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />

    
    </div>
  );
}

export default Grafico;
