import React, { Component,useState } from 'react'
import iconeLogin from '../../img/contorno-de-cabeca-de-cavalo.png'
import iconeLoginSigla from '../../img/HF-branco.png'
import lupa from '../../img/download.png'
export default function Header() {

    const [fname, setFname] = useState("")
    const [buttonText, setButtonText] = useState('Click');
    const [buttonText2, setButtonText2] = useState('Click');


  function handleClick() {
    setButtonText('New text');
    setButtonText2('Ethereum');
    
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
                        <button className="botao" onClick={handleClick}>{buttonText}</button>
                    </div>
            
                </header>
            
                <div className="principal">
                    <div className="grid-container">
                        <div className="grid-item">
                            <h2 className="nomeAtivo">NomeAtivo</h2>
                        </div>
                        <div className="grid-item barra">
                            <div>
                                <h4>Preço</h4>
                                <h2 className="precoAtivo"></h2>
                            </div>
                            <div className="variacao">
                                <h4>Variação(Dia)</h4>
                                <h2>1,04%</h2>
                            </div>
                        </div>
                    
                        <div className="grid-item barra">
                            <div className="variacaoDiaria">   
                                <h4>Max(24h)</h4>
                                <h2 className="variacaoMax" onClick={handleClick}>{buttonText2}</h2>
                                <h4>Min(24h)</h4>
                                <h2 className="variacaoMin">R$1.000.000,00</h2>
                            </div>
                            <div className="volumeAtivo">
                                <h4>Volume do Ativo</h4>
                                <h2>R$1.000.000,00</h2>
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
