import React from 'react'
import '../style/input.css'

const Input = (props) => (
    <form className="input" onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="Cidade"/>
        <input type="text" name="country" placeholder="Pais"/>
        <button>Obter</button>
    </form>
)

export default Input;