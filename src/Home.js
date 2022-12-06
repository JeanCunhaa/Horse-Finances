import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import Header from './components/header/index'
import Principal from './components/principal/index'
import Footer from './components/footer/index'
//import Grafico from './graficos'
import './styles.css'
import Csv from './components/csv/csv';
//const root = ReactDOM.createRoot(document.getElementById('root'));


export default function Home() {

  return (
  <React.StrictMode>
    <Principal/>
    <Csv/>
    <Footer/>
    
  </React.StrictMode>
)
}