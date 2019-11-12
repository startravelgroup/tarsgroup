import React from 'react'
import '../style/clima.css'

const Clima = (props) => {

    return(
        <div className="clima-app animated fadeInDown">
            <h1>{props.citytop}</h1>
            <div className = "dayImgtop animated fadeIn delay-03s">
                <img src="" alt=""/>
            </div>
            <h1 className="temptop">{props.temptop}º</h1>
            <p className="tempmantop">{props.tempmantop}↕</p>
            <p className="tempmintop">{props.tempmintop}↕</p>
        </div>
    )
}

export default Clima;