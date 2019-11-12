import React from 'react';
import '../style/weatherHistoric.css'

class WeatherHistoric extends React.Component {
    constructor(props){
        super(props)
        this.getStart = this.getStart.bind(this)
        this.getLogin = this.getLogin.bind(this)
        this.state = {
            display: "none",
            display2: "block",
            titulo: "Localização",
            Botao: "Login",
            message: '',
            token: ''
        }

        this.getStart()
    }

    
    getStart = () =>{
        if(this.state.display == "block"){
            
            this.setState({
                display: "none",
                display2: "block",
                titulo: "Localização",
                Botao: "Buscar Histórico"
            })
        }else{
            this.setState({
                display: "block",
                display2: "none",
                titulo: "Login",
                Botao: "Voltar"
            })
        }
        
        
       
    }

    getLogin = () =>{
        const data = { email: this.email, password: this.password };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

      fetch('http://localhost:7000/login', requestInfo)
      .then(response =>{
          if(response.ok){
              return response.json()
          }
          throw new Error("Login inválido...");
      })
      .then(token => {
          this.setState({token: token});
          localStorage.setItem('token', token);
      })
      .catch(e => {
          this.setState({
              message: e.message
          });
      });

    }

render(){
    var sectionStyle = {
        display: this.state.display
        
      };

      var sectionStyle2 = {
        display: this.state.display2
        
      };

      var data = new Date();
      const dataAtual = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`

    return(
        <div className = "weatherHistoric">
            <div className = "temp animated fadeIn delay-01s">
              {this.props.temp}º
            </div>

            <div className = 'temp-max animated fadeIn delay-01s'>
               {this.props.tempMax}↕
            </div>

            <div className = 'temp-min animated fadeIn delay-01s'>
                {this.props.tempMin}↕
            </div>

            <div className = "dayImg animated fadeIn delay-03s">
                <img src="" alt=""/>
            </div>

            <div className = "day animated fadeIn delay-05s">
                {this.props.day}
            </div>          

            <div className = 'weatherPercents'>

                <div className = 'wind animated fadeIn delay-07s'>
                    Vento: {this.props.wind} m/s<br></br>
                    
                </div>

                <div className = 'humidade animated fadeIn delay-09s'>
                    Humidade: {this.props.humidade}%
                </div>

                <div className = 'desc animated fadeIn delay-11s'>
                    Descrição: {this.props.desc}
                </div>

            </div>

            <div className = "linha animated fadeIn delay-13s"></div>

            <div className = "bairroSpan animated fadeIn delay-13s">{this.state.titulo}</div>

            <div className = 'bairro animated fadeIn delay-13s' style={sectionStyle2}>
                {this.props.bairro}<br/><br/>
                
                <span>{dataAtual}</span>
            </div>
                <div className="historic-app">
                    {
                        this.state.message !== '' ? ( alert(this.state.message) ) : ''
                    }
                    <div className="login">
                            <form className="input animated fadeIn delay-13s" style={sectionStyle}>
                                <input type="text" name="email" onChange={e => this.email = e.target.value} placeholder="Login"/>
                                <input type="password" name="password"  onChange={e => this.password = e.target.value}placeholder="Senha"/>
                                <button onClick={this.getLogin}>Entrar</button>
                            </form>
                        </div>
                    <button onClick={this.getStart} className="BtnPesquisa">{this.state.Botao}</button>
                </div>
            </div>
    )

}
    



}
export default WeatherHistoric;
