import React, { Component } from 'react'

class Principal extends Component {
    render(){
        return(
            <>
                <div className="principal">
                    <div className="grid-container">
                        <div className="grid-item">
                            <h2 className="nomeAtivo">NomeAtivo</h2>
                        </div>
                        <div className="grid-item barra">
                            <div>
                                <h4>Preço</h4>
                                <h2 className="precoAtivo">R$1.000.000,00</h2>
                            </div>
                            <div className="variacao">
                                <h4>Variação(Dia)</h4>
                                <h2>1,04%</h2>
                            </div>
                        </div>
                    
                        <div className="grid-item barra">
                            <div className="variacaoDiaria">   
                                <h4>Max(24h)</h4>
                                <h2 className="variacaoMax">R$1.000.000,00</h2>
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
}

export default Principal