import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

import Header from './components/header/index'
import Principal from './components/principal/index'
import Footer from './components/footer/index'
//import Grafico from './graficos'
import Chart from './Chart';
import './styles.css'
//const root = ReactDOM.createRoot(document.getElementById('root'));
export default function Home() 
{
  return (
  <React.StrictMode>
    <Principal/>
    <Chart/>
    <Footer/>
  </React.StrictMode>
)
}