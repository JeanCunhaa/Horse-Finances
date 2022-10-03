import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

import Principal from './components/principal/index'
import Footer from './components/footer/index'
import Grafico from './graficos'
import './styles.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Principal />
    <Grafico/>
    <Footer />
  </React.StrictMode>
);