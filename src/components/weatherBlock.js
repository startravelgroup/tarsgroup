import React from 'react';
import '../style/weatherBlock.css';
import './weatherHistoric';
import WeatherHistoric from './weatherHistoric';
import '../style/weatherHistoric.css';
import '../style/animated.css'

const WeatherBlock = (props) =>{
 
var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var d = new Date();


var temp = props.temp
var day = semana[d.getDay()]
var wind = props.wind
var tempMax = props.tempMax
var tempMin = props.tempMin
var humidade = props.humidade
var desc = props.desc
var bairro = props.bairro

return(
    <div className="weatherBlock">
        <h1> </h1>
        <WeatherHistoric
           temp = {temp}
           day = {day}
           wind = {wind}
           tempMax = {tempMax}
           tempMin = {tempMin}
           humidade = {humidade}
           desc ={ desc}
           bairro = {bairro}
           expande = {props.expande}
        />
        

    </div>
    
)
}
export default WeatherBlock;
