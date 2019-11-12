import React from 'react'
import '../style/teste.css'

const Teste = (props) => {

    return(
        <div className="teste-app animated fadeInDown">
            <h1>{props.cidade}</h1>
        </div>
    )
}

export default Teste;