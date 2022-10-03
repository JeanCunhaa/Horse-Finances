import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

import PrincipalEntrar from './components/principal-entrar/index'
import FooterEntrar from './components/footer-cadastrar/index'
import './stylesentrar.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrincipalEntrar />
    <FooterEntrar />
  </React.StrictMode>
);