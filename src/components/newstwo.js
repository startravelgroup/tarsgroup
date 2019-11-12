import React from 'react'
import '../style/newstwo.css'

const NewsTwo = (props) => {

    var sectionStyle = {
        backgroundImage: "url("+props.url+")",
        backgroundSize: "cover"
        
      };


return (

    <div className="newstwo-app">
        <a href={props.link} target="_blank">
            <div className="newstwo-block" style={sectionStyle} ></div> 
            <h1>{props.autor}</h1>
            <p>{props.data}</p>
        </a>
    </div>
)}

export default NewsTwo;