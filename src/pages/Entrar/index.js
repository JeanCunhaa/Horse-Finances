import React, { Component,useState } from 'react'
import iconeLogin from '../../img/contorno-de-cabeca-de-cavalo.png'


import { InputContainer, MainLoginContainer } from './styles'
import { LeftLoginContainer } from './styles'
import { RightLoginContainer } from './styles'
import { CardLoginContainer } from './styles'
import { TextFieldContainer } from './styles'
import { CadastroContainer } from './styles'

import { BtnEntrarContainer } from './styles'
import { EntrarContainer} from './styles'


//import '../../styleEntrar.css'


export default function HeaderEntrar() {

    const [fname, setFname] = useState("")

    const handleChange = e => {    setFname(e.target.value)  }
        return(
            <>
                 <body>
                    <MainLoginContainer>
                        <RightLoginContainer>
                            <CardLoginContainer>
                                <h1>HORSE FINANCES</h1>
                                <TextFieldContainer>
                                    <CadastroContainer>Email:</CadastroContainer>
                                    <input type='text' name='usuario' placeholder='Email'></input>
                                </TextFieldContainer>
                                <TextFieldContainer>
                                    <EntrarContainer>Senha:</EntrarContainer>
                                    <input type='text' name='senha' placeholder='Senha'></input>
                                    <BtnEntrarContainer to="/">Entrar</BtnEntrarContainer>
                                    <h4>Esqueceu a senha? Fodase!</h4>
                                </TextFieldContainer>
                                
                            </CardLoginContainer>
                        </RightLoginContainer>
                        </MainLoginContainer>
                </body>
                <footer>
                    <p>© 2022 HorseFinances. All rights reserved.</p>
                </footer>
            </>
        );
}
