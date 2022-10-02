import logo from './logo.svg';
import './App.css';
//import fs from 'fs';
var parse = require('html-react-parser');
function App() {
  let test = `<!DOCTYPE html>
  <html lang="pt-br">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>

          /* GERAL */

*{
    margin: 0px;
    color: white;
}
body{
    background-color: #18191a;
}

/* CABEÇALHO */

.area-login{
    background: #242526 ;
    align-items: center;
    display: flex;
    height: 3rem;
    justify-content: space-between;
}

.icone-login{
    margin-left: 1rem;
}

.icone-cabecalho{
    padding-top: 0.5rem;
    padding-left: 1.5rem;
}

.login{
    padding-right: 1.5rem;
    color: white;
}

.link{
    padding: 1rem;
    text-decoration: none;
    color: white;

}

form {
    border-radius: 2rem;
    border: 0.063rem solid;
    right: 6%;
    top: 7%;
    position: absolute;
    width: 6%;
    height: 5%;
    margin-top: 0%;
    padding-left: 5%;
    padding-right: 0%;
    margin-left: 10%;
    background-color: white;
}
.search{
    width: 70%;
    border-radius: 3rem;
    border: 0.063rem solid;
    right: 2%;
    left: 16.5%;
    top: 5%;
    position: absolute;
    height: 90%;
    padding-right: 0%;
    margin-left: 10%;
    border: transparent;
}
.lupa{
    border-radius: 5rem;
    right: 5%;
    left: 1%;
    top: 6%;
    position: absolute;
    height: 80%;
    padding-right: 0%;
    margin-left: 5%;
}

.header2{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    margin: 0.6rem 0;
}

.logo{
    margin-left: 2.5rem;
    font-family: 'Fantasy', cursive;
    color: white;
}


h1{
    margin-left: 0.625rem;
}

.grafico{
    margin-top: 3rem;
}


/* CONTEÚDO PRINCIPAL */

.grid-container {
    background-color: #242526;
    display: grid;
    height: 15rem;
    grid-template-columns: auto auto auto;
    padding: 0.625rem;
    margin: 0 10%;
    box-shadow: 10px 10px 13px -12px #888888;
}
.grid-item {
  padding: 1.25rem;
  font-size: 1rem;
  text-align: center;
}
.variacao h4,
.volumeAtivo h4{
    margin-top: 1.5rem;
}
.barra{
    border-left: 0.063rem solid white;
}
h4{
    margin-top: 0.438rem;
    color: #B0B0B0;
}
.nomeAtivo{
    line-height: 10rem;
}

/* RODAPÉ */

.sugestao{
    margin: 1.25rem;
    font-weight: bold;
    font-size: 1.563rem;
}

/* VERSÃO MOBILE / @MEDIA */

@media (max-width: 750px) {

    /* CABEÇALHO  */

    .logo{
        display: none;
    }
    form{
        right: 0;
        left: -4%;
        width: 81%;
        margin-top: -0.7rem;
    }
    .header2{
        margin: 0.6rem 0;
    }

    /* CONTEÚDO  */

    .barra{
        border-left: 0;
        border-top: 0.063rem solid white;
    }
    .grid-container{
        grid-template-columns: auto;
    }
    .grid-item.barra{
        padding: 3rem 0;
    }

    /* RODAPÉ */

}
          </style>
          <!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="estilo.css">
        <title>Horse Finances</title>
    </head>
    <body>

        <header>
            <div class="area-login">
                <div class="icone-cabecalho">
                    <img src="img/contorno-de-cabeca-de-cavalo.png" alt="" class="icone-login">
                    
                    <img src="img/HF.png" alt="" class="icone-login">
                    
                </div>
                <div class="login">
                    <a href="" class="link"> Cadastrar</a> |
                    <a href="" class="link"> Entrar</a>
                </div>
            </div>
            
            <div class="header2">
                <h1 class="logo">Horse Finances</h1>
                <form action="#" method="post">
                    <input class="search" type="text" placeholder="Buscar">
                    <input class="lupa" type="image" src="img/download.png">
                </form>
            </div>
        
        </header>
        
        <div class="grid-container"> <!-- usar icone da seta -->
            <div class="grid-item">
                <h2 class="nomeAtivo">NomeAtivo</h2>
            </div>

            <div class="grid-item barra">
                <div>
                    <h4>Preço</h4>
                    <h2 class="precoAtivo">R$1.000.000,00</h2>
                </div>
                <div class="variacao">
                    <h4>Variação(Dia)</h4>
                    <h2>1,04%</h2>
                </div>
            </div>
            
            <div class="grid-item barra">
                <div class="variacaoDiaria">
                    <h4>Max(24h)</h4>
                    <h2 class="variacaoMax">R$1.000.000,00</h2>

                    <h4>Min(24h)</h4>
                    <h2 class="variacaoMin">R$1.000.000,00</h2>
                </div>
                <div class="volumeAtivo">
                    <h4>Volume do Ativo</h4>
                    <h2>R$1.000.000,00</h2>
                </div>
            </div>
            
        </div>

        <!--
        <div class="grafico">
            <h3>Gráfico de <span class="ativo">nome_ativo</span> para BRL</h3>
        </div>
        
        <div class="sugestao">
            <p>
                Sugestão de Compra: <img src="" alt="Imagem Sugestão">  <!-- usar icone do like ou deslike -->
            </p>
        <div>
        -->
    </body>
</html>`
  test = parse(test)
  //now return 10 sepate elements
  return (
   test
  );
 }
// a0888e1f7342420a

export default App;
