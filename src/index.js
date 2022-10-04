import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

import Home from './components/landingPage/index'
import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);