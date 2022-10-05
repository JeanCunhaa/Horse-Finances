import React, { Component } from 'react'
import logo from '../../img/indice.png'

import { MainLoginContainer } from './styles'
import { LeftLoginContainer } from './styles'
import { RightLoginContainer } from './styles'


//import '../../style.css'

class Home extends Component {
    render(){
        return(
            <>
                <body>
                    <MainLoginContainer>
                        <LeftLoginContainer>
                            <h1>Faça login ou</h1>
                            <h1>entre para o nosso time</h1>
                            <img src={logo} className='logo'/>
                        </LeftLoginContainer>
                        <RightLoginContainer>
                            <div className='card-login'>
                                <h1>HORSE FINANCES</h1>
                                <div className='textfield'>
                                    <label for='cadastro'>Para se cadastrar:</label>
                                    <button className='btn-cadastro'>Cadastre-se</button>
                                </div>
                                <div className='textfield'>
                                    <label for='entrar'>Ja tem uma conta?</label>
                                    <button className='btn-cadastro'>Entrar</button>
                                    <h4>Esqueceu a senha? Fodase!</h4>
                                </div>
                                
                            </div>
                        </RightLoginContainer>
                        </MainLoginContainer>
                </body>
                <footer>
                    <p>© 2022 HorseFinances. All rights reserved.</p>
                </footer>
            </>
        )
    }
}

export default Home