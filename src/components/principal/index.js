import React, { Component,useState,useEffect} from 'react'
import iconeLogin from '../../img/contorno-de-cabeca-de-cavalo.png'
import iconeLoginSigla from '../../img/HF-branco.png'
import lupa from '../../img/download.png'
const axios = require('axios');
export default function Principal() {

    const [fname, setFname] = useState("")

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
            
                var moedas = {  
                valor: moedaItems.price,
                nome:  moedaItems.name,
                simbolo:  moedaItems.symbol,
                restante:  moedaItems.remaining,
                volume24h:  moedaItems.total_volume_24h,
                baixa24h:  moedaItems.low_24h,
                 alta24h:  moedaItems.high_24h
                }


    const handleChange = e => {    setFname(e.target.value)  }
        return(
            <>
                <header>
                    <div className="area-login">
                        <div className="icone-cabecalho">
                            <img src={iconeLogin} className="iconeLogin" />
                            
                            <img src={iconeLoginSigla} alt="" className="iconeLoginSigla" />
                            
                        </div>
                        <div className="login">
                            <a href="" className="link"> Cadastrar</a> |
                            <a href="" className="link"> Entrar</a>
                        </div>
                    </div>
                    
                    <div className="header2">
                        <h1 className="logo">Horse Finances</h1>
                        <form >
                            <input className="search" type="text" placeholder="Buscar" onChange={handleChange}/>
                            <input className="lupa" type="image" src={lupa} />
                        </form>
                        <button className="botao" >Cadastrar</button>
                    </div>
            
                </header>
            
                

                <div className="principal">
                    <div className="grid-container">
                        <div className="grid-item">
                            <h2 className="nomeAtivo"><p>{moedas.nome}</p></h2>
                        </div>
                        <div className="grid-item barra">
                            <div>
                                <h4>Preço</h4>
                                <h2 className="precoAtivo">R$1.000.000,00</h2>
                            </div>
                            <div className="variação">
                                <h4>Variação(Dia)</h4>
                                <h2><p>{moedas.alta24h-moedas.baixa24h}</p></h2>
                            </div>
                        </div>
                    
                        <div className="grid-item barra">
                            <div className="variacaoDiaria">   
                                <h4>Max(24h)</h4>
                                <h2 className="variacaoMax"><p>{moedas.alta24h}</p></h2>
                                <h4>Min(24h)</h4>
                                <h2 className="variacaoMin"><p>{moedas.baixa24h}</p></h2>
                            </div>
                            <div className="volumeAtivo">
                                <h4>Volume do Ativo</h4>
                                <h2><p>{moedas.volume24h}</p></h2>
                            </div>
                        </div>
                    
                    </div>
                    <div className="grafico">
                        <h3>Gráfico de <span className="ativo">nome_ativo</span> para BRL</h3>
                    </div>
                    
                </div>
            </>
        )
    }
}
