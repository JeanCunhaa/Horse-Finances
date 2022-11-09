import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import Header from './components/header/index'
import Principal from './components/principal/index'
import Footer from './components/footer/index'
//import Grafico from './graficos'
import Chart from './Chart';
import { getCandles } from './DataService';
import './styles.css'
//const root = ReactDOM.createRoot(document.getElementById('root'));


export default function Home() {

  const [symbol, setSymbol] = useState('BTCUSDT')
  const [interval, setInterval] = useState('1m')
  const [data, setData] = useState([]);

  useEffect(() => {
    getCandles(symbol, interval)
      .then(data => setData(data))
      .catch(err => alert(err.response ? err.response.data : err.message))
  }, [symbol, interval])

  function onSymbolChange(event){
    setSymbol(event.target.value);
  }

  
  function onIntervalChange(event){
    setInterval(event.target.value);
  }

  return (
  <React.StrictMode>
    <Principal/>
    <div>
    <select onChange={onSymbolChange}>
      <option>BTCUSDT</option>
      <option>ETHUSDT</option>
      <option>ADAUSDT</option>
    </select>
    <select onChange={onIntervalChange}>
      <option>1m</option>
      <option>1d</option>
      <option>1w</option>
    </select>
    </div>
    <Chart data={data}/>
    <Footer/>
  </React.StrictMode>
)
}