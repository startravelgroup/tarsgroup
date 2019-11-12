import React from 'react';
import '../style/header.css';

const Header = (props) => {
    let logo = "logo";

    function aumentar() {
        logo = "icon";
        console.log(logo);
        
    }
    
    return(
        <div className="header-app">
            <div className = {`logo animated fadeInDown`}>
                <img src="" alt=""/>
            </div> 

            <form className=
                "input-app animated fadeInDown"
                autocomplete = "off" 
                onSubmit={props.getCityWeather} 
                onClick= { aumentar }
                >
                <input type="text" name="city" placeholder="Insira sua localização..."/>
            </form>
        </div>
    )
}
export default Header;