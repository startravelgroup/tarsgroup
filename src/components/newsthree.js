import React from 'react'
import '../style/newstwo.css'

const NewsThree = (props) => (

    <div className="newstwo-app">
        <h1>Posição atual</h1>
        <p>Rua: {props.rua}</p>
        <p>Bairro: {props.bairro}</p>
        <p>Cidade: {props.cidade}</p>
        <p>Estado: {props.estado}</p>
        <p>Pais: {props.pais}</p>
        <p>CEP: {props.cep}</p>
    </div>
)

export default NewsThree;