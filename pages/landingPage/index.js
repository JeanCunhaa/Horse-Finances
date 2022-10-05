import React, { Component } from 'react'
import logo from '../../img/indice.png'


class Home extends Component {
    render(){
        return(
            <>
                <body>
                    <div className='main-login'>
                        <div className='left-login'>
                            <h1>Faça login ou</h1>
                            
                            <h1>entre para o nosso time</h1>
                            <img src={logo} className='logo'/>
                        </div>
                        <div className='right-login'>
                            <div className='card-login'>
                                <h1>HORSE FINANCES</h1>
                                <div className='textfield'>
                                    <label for='cadastro'>Para se cadastrar:</label>
                                    <button className='btn-cadastro'>Cadastre-se</button>
                                </div>
                                <div className='textfield'>
                                    <label for='entrar'>Ja tem uma conta?</label>
                                    <button className='btn-cadastro'>Entrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </>
        )
    }
}

export default Home