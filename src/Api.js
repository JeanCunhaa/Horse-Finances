import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

var parse = require('html-react-parser');

export default function Api() {
  const [moedaItems, initMoeda] = useState([])
const fetchData = async () => {
  let response = await axios.get('https://coinlib.io/api/v1/coin?key=a0888e1f7342420a&pref=BRL&symbol=ETH')
  console.log(response)  
  return response.data
  }

  useEffect(() => {
    fetchData()
      .then((res) => {
        initMoeda(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])
  let moedas = {  
    valor:  moedaItems.price,
    nome:  moedaItems.name,
    simbolo:  moedaItems.symbol,
    restante:  moedaItems.remaining,
    volume24h:  moedaItems.total_volume_24h,
    baixa24h:  moedaItems.low_24h,
   alta24h:  moedaItems.high_24h
 }


  return (
    <div>
      <h1>Nome</h1>
      <p>{moedas.nome}</p>
      <h1>Valor</h1>
      <p>{moedas.valor}</p>
      <h1>simbolo</h1>
      <p>{moedas.simbolo}</p>
      <h1>restante</h1>
      <p>{moedas.restante}</p>
      <h1>volume</h1>
      <p>{moedas.volume24h}</p>
      <h1>Alta</h1>
      <p>{moedas.alta24h}</p>
      <h1>Baixa</h1>
      <p>{moedas.baixa24h}</p>
    </div>
  )
 }
 // a0888e1f7342420a
//testes antigos:

// forzinho aumentando style
 // let test = ''
  //   for (let i = 1; i < 10; i++) {
  //    test+=`<h1 style="padding-left:${i*20}px;">Hello World</h1>`
  //    console.log(test)
  // }
  // test = parse(test)
  // //now return 10 sepate elements
  // return (
  //  test

    
  // );