import React, { Component } from 'react'
import Like from '../../img/polegar-para-cima.png'

class Footer extends Component {
    render(){
        return(
            <>
                <div className="sugestao">
                    <p>
                        Sugestão de Compra: <img src={Like} alt="Imagem Sugestão" />
                    </p>
                </div>
                <footer>
                    <p>© 2022 HorseFinances. All rights reserved.</p>
                </footer>
            </>
        )
    }
}

export default Footer