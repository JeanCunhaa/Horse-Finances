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

  const [data, setData] = useState([]);

  useEffect(() => {
    getCandles('BTCUSDT', '1m')
      .then(data => setData(data))
      .catch(err => alert(err.response ? err.response.data : err.message))
  }, [])

  return (
  <React.StrictMode>
    <Principal/>
    <Chart data={data}/>
    <Footer/>
  </React.StrictMode>
)
}