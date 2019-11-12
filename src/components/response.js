import React from 'react'
import '../style/response.css';

const Response = (props) =>(
    <div className="response">
        <p>Cidade pesquisada: {props.city}</p>
        <p>Temperatura: {props.temperature}Cº</p>
        <p>Humidade: {props.humidity}%</p>
        <p>Descrição: {props.description}</p>
        
    </div>
)

export default Response