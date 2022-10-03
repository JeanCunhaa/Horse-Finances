import React, { Component } from 'react'

import iconeLogin from '../../img/contorno-de-cabeca-de-cavalo.png'
import iconeLoginSigla from '../../img/HF-branco.png'
import lupa from '../../img/download.png'

class Header extends Component {
    render(){
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
                        <form action="#" method="post">
                            <input className="search" type="text" placeholder="Buscar" />
                            <input className="lupa" type="image" src={lupa} />
                        </form>
                    </div>
            
                </header>
            </>
        )
    }
}

export default Header