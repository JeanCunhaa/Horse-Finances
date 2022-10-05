import React, { Component,useState } from 'react'
import iconeLogin from '../../img/contorno-de-cabeca-de-cavalo.png'
import iconeLoginSigla from '../../img/HF-branco.png'

//import '../../styleEntrar.css'


export default function HeaderEntrar() {

    const [fname, setFname] = useState("")

    const handleChange = e => {    setFname(e.target.value)  }
        return(
            <>
                <header>
                    <div class="area-login">
                        <a href="">
                            <div class="icone-cabecalho">
                                <img src={iconeLogin} alt="" class="iconeLogin" />
                            
                                <img src={iconeLoginSigla} alt="" class="iconeLoginSigla" />
                            
                            </div>
                        </a>
                        <div class="login">
                            <a href="" class="link"> Cadastrar</a> |
                            <a href="" class="link"> Entrar</a>
                        </div>
                    </div>
                </header>

                <div class="conteudo-principal">

                    <h1>Entrar</h1>

                    <form>

                        <label for="email">E-mail:</label> 
                        <input type="email" name="email" id="email" /> 

                        <label for="senha">Senha:</label> 
                        <input type="password" name="senha" id="senha" />

                        <input type="button" value="Entrar" id="entrar" />

                    </form>
                </div>
            </>
        );
}
