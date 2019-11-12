import React from 'react'
import '../style/news.css'


const News = (props) => {


var sectionStyle = {
    backgroundImage: "url("+props.url+")",
    backgroundSize: "cover"
    
    };

   

var title = props.titulo;
var autor = props.autor;


    return (

    <div className="news-app animated fadeIn delay-01s" style={sectionStyle}>
        <h1>{autor}</h1>
        <a href={props.link}  target="_blank"><button>Leia ></button></a>
    </div>

)}

export default News;