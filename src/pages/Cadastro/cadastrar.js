import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

import PrincipalCadastrar from './components/principal-cadastrar/index'
import FooterCadastrar from './components/footer-cadastrar/index'
import './stylescadastrar.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrincipalCadastrar />
    <FooterCadastrar />
  </React.StrictMode>
);