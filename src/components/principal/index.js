import React, { Component, useState, useEffect } from "react";
import iconeLogin from "../../img/contorno-de-cabeca-de-cavalo.png";
import iconeLoginSigla from "../../img/HF-branco.png";
import lupa from "../../img/download.png";
const axios = require("axios");

export default function Principal() {
  const [buttonText, setButtonText] = useState("Click");
  const [MoedaNome, setMoedaNome] = useState("Bitcoin");
  const [MoedaPreco, setMoedaPreco] = useState("R$1.000.000,00");
  const [MoedaVariacao, setMoedaVariacao] = useState("1356.4621524832037");
  const [MoedaMaximo, setMoedaMaximo] = useState("104158.3625153951");
  const [MoedaMinimo, setMoedaMinimo] = useState("102801.9003629119");
  const [MoedaVolume, setMoedaVolume] = useState("4260802736.0526823997");
  const [fname, setFname] = useState("");
  const [teste, setTeste] = useState("");

  async function apiCall(coin = "BTC") {
    axios
      .get(
        "https://coinlib.io/api/v1/coin?key=a0888e1f7342420a&pref=BRL&symbol=" +
          coin
      )
      .then((res) => {
        const temp = res.data;
        setTeste(temp);
        setMoedaNome(temp.name);
        let variacao = (temp.high_24h - temp.low_24h) / 100
        setMoedaPreco("R$ " + temp.price.split(".")[0].toString() + "," + temp.price.split(".")[1].toString().substring(0, 2));
        setMoedaVariacao(variacao.toString().split(".")[0]+","+variacao.toString().split(".")[1].substring(0,1) + "%");
        setMoedaMaximo(temp.high_24h.split(".")[0]+ "," + temp.price.split(".")[1].toString().substring(0, 2));
        setMoedaMinimo(temp.low_24h.split(".")[0]+ "," + temp.price.split(".")[1].toString().substring(0, 2));
        setMoedaVolume(temp.total_volume_24h.split(".")[0]+ "," + temp.price.split(".")[1].toString().substring(0, 2));
      })
      .catch((e) => {
        console.log(e.message);
      });
    console.log(teste);

    // useEffect(() => {
    //   fetchData()
    //     .then((res) => {
    //       initMoeda(res);
    //     })
    //     .catch((e) => {
    //       console.log(e.message);
    //     });
    // }, []);
  }

  const handleClick2 = () => {
    setButtonText("Cadastrar");
  };

  useEffect(() => {
    HandleClick();
  }, []);

  async function HandleClick() {
    const fetchData = async () => {
      let response = await axios.get(
        "https://coinlib.io/api/v1/coin?key=a0888e1f7342420a&pref=BRL&symbol=" +
          fname
      );
      console.log(response);
      return response.data;
    };

    // response = fetchData();

    // console.log(response);
    // var moedas = {
    //   valor: response.data.price,
    //   nome: response.data.name,
    //   simbolo: response.data.symbol,
    //   restante: response.data.remaining,
    //   volume24h: response.data.total_volume_24h,
    //   baixa24h: response.low_24h,
    //   alta24h: response.high_24h,
    // };
    // setMoedaNome(moedas.name);
    // setMoedaPreco(moedas.price);
    // setMoedaVariacao(moedas.baixa24h - moedas.alta24h);
    // setMoedaMaximo(moedas.alta24h);
    // setMoedaMinimo(moedas.baixa24h);
    // setMoedaVolume(moedas.volume24h);
  }

//   var response = apiCall();
//   var moedas = {
//     valor: response.price,
//     nome: response.name,
//     simbolo: response.symbol,
//     restante: response.remaining,
//     volume24h: response.total_volume_24h,
//     baixa24h: response.low_24h,
//     alta24h: response.high_24h,
//   };

  const handleChange = (e) => {
    setFname(e.target.value);
  };

  return (
    <>
      <header>
        <div className="area-login">
          <div className="icone-cabecalho">
            <img src={iconeLogin} className="iconeLogin" />

            <img src={iconeLoginSigla} alt="" className="iconeLoginSigla" />
          </div>
          <div className="login">
            <a href="" className="link">
              {" "}
              Cadastrar
            </a>{" "}
            |
            <a href="" className="link">
              {" "}
              Entrar
            </a>
          </div>
        </div>

        <div className="header2">
          <h1 className="logo">Horse Finances</h1>
          <form>
            <input
              className="search"
              type="text"
              placeholder="Buscar"
              onChange={handleChange}
            />
            <input className="lupa" type="image" src={lupa} />
          </form>
          <button
            className="botao"
            onClick={async () => await apiCall(fname)}
          >
            {buttonText}
          </button>
        </div>
      </header>

      <div className="principal">
        <div className="grid-container">
          <div className="grid-item">
            <h2 className="nomeAtivo">
              <p>{MoedaNome}</p>
            </h2>
          </div>
          <div className="grid-item barra">
            <div>
              <h4>Preço</h4>
              <h2 className="precoAtivo">{MoedaPreco}</h2>
            </div>
            <div className="variação">
              <h4>Variação(Dia)</h4>
              <h2>
                <p>{MoedaVariacao}</p>
              </h2>
            </div>
          </div>

          <div className="grid-item barra">
            <div className="variacaoDiaria">
              <h4>Max(24h)</h4>
              <h2 className="variacaoMax">
                <p>{MoedaMaximo}</p>
              </h2>
              <h4>Min(24h)</h4>
              <h2 className="variacaoMin">
                <p>{MoedaMinimo}</p>
              </h2>
            </div>
            <div className="volumeAtivo">
              <h4>Volume do Ativo</h4>
              <h2>
                <p>{MoedaVolume}</p>
              </h2>
            </div>
          </div>
        </div>
        <div className="grafico">
          <h3>
            Gráfico de <span className="ativo">{MoedaNome}</span> para BRL
          </h3>
        </div>
      </div>
    </>
  );
}
