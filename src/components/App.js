import React from 'react';
import Header from './header';
import Map from './mapPolution';
import NewsBlock from './newsblock';
import News from './news';
import WeatherBlock from './weatherBlock';
import Clima from './clima.js';

const API_KEY = "5f4567f539b0412d7856feee5df6de16"
var latitude;
var longitude;
var cidadeTeste;
var temperatura;
class Application extends React.Component{
  
  constructor(props){
    super(props)
    this.getWeather = this.getWeather.bind(this)
    this.getUser = this.getUser.bind(this)
    this.getPosition = this.getPosition.bind(this)
    this.getNews = this.getNews.bind(this)
    this.getLatLon = this.getLatLon.bind(this)
    this.getTeste = this.getTeste.bind(this)
    this.getCityWeather = this.getCityWeather.bind(this)

    this.state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        tempMax: undefined,
        temp_min: undefined,
        wind: undefined,
        error: undefined,
        name: undefined,
        email: undefined,
        login: undefined,
        latitude: undefined,
        longitude: undefined,
        autor: undefined,
        titulo: undefined,
        descricao: undefined,
        publishe: undefined,
        rua: undefined,
        bairro: undefined,
        cidade: undefined,
        estado: undefined,
        pais: undefined,
        cep: undefined,
        link: undefined,
        url: undefined,
        dataFormat: undefined,
        cidadeTeste: undefined,
        citytop: undefined,
        temptop: undefined,
        tempmantop: undefined,
        tempmintop: undefined,
        button: undefined
    }

    this.getPosition()
    this.getLatLon()
    this.getWeather()
    this.getNews()
  }
  

  

  getLatLon = async(e) =>{
    
    
    const API_GOOGLE = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDtGagYn8eT-vXf0s1dPaHuwG1_bj6hgkI`);
    
    const data_google = await API_GOOGLE.json()
    console.log(data_google);

    localStorage.setItem("cidade", data_google.results[0].address_components[3].long_name)
    
    
    this.setState({
      rua: data_google.results[0].address_components[1].short_name,
      bairro: data_google.results[0].address_components[2].short_name,
      cidade: data_google.results[0].address_components[3].long_name,
      estado: data_google.results[0].address_components[4].long_name,
      pais: 'Brazil',
      /*pais: data_google.results[2].address_components[5].long_name,*/
      /*cep: data_google.results[].address_components[6].short_name,*/
      cidadeTeste: cidadeTeste
    })
  
    
    
  }



  getUser = async(e) => {
      e.preventDefault();

      const api_user = await fetch(`http://localhost:9000/client/1`);

      const data_user = await api_user.json()
      
      console.log(data_user)

      this.setState({
        name: data_user.name,
        email: data_user.email,
        login: data_user.login
      })

  }

  getPosition = () => {
      
       navigator.geolocation.watchPosition(
         function(pos){
           
            console.log(pos)
            localStorage.setItem("latitude", pos.coords.latitude);
            localStorage.setItem("longitude", pos.coords.longitude);
         }
       ,
          function(error){
              console.log(error)
       }, { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 })

       
       if(localStorage.getItem("latitude") || localStorage.getItem("latitude")){
            latitude = localStorage.getItem("latitude")
            longitude = localStorage.getItem("longitude")
       }
       this.setState({
        latitude: latitude,
        longitude: longitude
      });

      
      
  }

  
  getNews = async(e) =>{

    const API_NEWS = await fetch(`https://newsapi.org/v2/top-headlines?country=br&apiKey=7ddb2674bef44f9d99dfdef3a6c601f1`)
    const API_DATA = await API_NEWS.json()

    console.log(API_DATA)

    var cod = Math.floor(Math.random() * 10);

    var data = API_DATA.articles[cod].publishedAt.split("-")

    var dataFormat = data[2].substring(0, 2) + "/" + data[1] + "/" + data[0];

    var title = API_DATA.articles[cod].title.substring(0, 15)
 
    
    this.setState({
      autor: API_DATA.articles[cod].author,
      titulo: title,
      descricao: API_DATA.articles[cod].description,
      publishe: API_DATA.articles[cod].publishedAt,
      link: API_DATA.articles[cod].url,
      url: API_DATA.articles[cod].urlToImage,
      dataFormat: dataFormat
    })
   
  }


  getTeste = () =>{
    localStorage.removeItem("cidade")
    this.getWeather();
  }

  getWeather = async(e) => {
    
    var city;

    
    if(this.state.cityteste === undefined){
      city = localStorage.getItem("cidade");
    }else{
      city = this.state.cityteste;
    }
   
    // const country = e.target.elements.country.value.trim();
    const country = "Brasil";
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    
    const data = await api_call.json()

    console.log("weather");
    console.log(data);

    
    var temperatura = String(data.main.temp).substr(0,2);
    var city = data.name;
    var pais = data.sys.country;
    var humidity = data.main.humidity;
    var tempMax = String(data.main.temp_max).substr(0,2);
    var temp_min = String(data.main.temp_min).substr(0,2);
    var wind = data.wind.speed;
    var description = data.weather[0].description;



    this.setState({
        temperature: temperatura,
        city: city,
        country: pais,
        humidity: humidity,
        tempMax: tempMax,
        temp_min: temp_min,
        wind: wind,
        description: description,
        error: ""
    })
  }

  getCityWeather = async(e) => {
    
    e.preventDefault();

    var city = e.target.elements.city.value.trim();

    const country = "Brasil";
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    
    const data = await api_call.json()

    console.log("weather2")
    console.log(data)

    
    var city = data.name;
    var temp = String(data.main.temp).substr(0,2);
    var tempmax = String(data.main.temp_max).substr(0, 2);
    var tempmin = String(data.main.temp_min).substr(0, 2);

    localStorage.removeItem("longitude")
    localStorage.removeItem("latitude")

    localStorage.setItem("longitude", data.coord.lon)
    localStorage.setItem("latitude", data.coord.lat)

    this.setState({
        
        citytop: city,
        temptop: temp,
        tempmantop: tempmax,
        tempmintop: tempmin
    })
  }

  


  render(){
    
      return(
        
        <div>

          {this.state.citytop !== undefined || this.state.citytop === null && this.state.button === 0?
              <Clima
                  citytop={this.state.citytop}
                  temptop={this.state.temptop}
                  tempmantop={this.state.tempmantop}
                  tempmintop={this.state.tempmintop}

              />

              : console.log("erro") }

          <Header getCityWeather={this.getCityWeather}/>
          
          {this.state.citytop !== undefined || this.state.citytop === null ?  <button className="close" onclick={this.state.button == 1} >Fechar</button> : this.state.button == 0  }

          {/*<Logo/>
          
          <Search 
            getWeather={this.getWeather}
            cidade={this.state.cidade}
          />
          */}
          
          <News 
            getNews={this.getNews}
            city={this.state.city}
            autor={this.state.autor}
            publishe={this.state.publishe}
            data={this.state.dataFormat}
            titulo={this.state.titulo}
            link={this.state.link}
            url={this.state.url}
          />

          <NewsBlock 
            getNews={this.getNews}
            city={this.state.city}
            autor={this.state.autor}
            publishe={this.state.publishe}
            data={this.state.dataFormat}
            titulo={this.state.titulo}
            link={this.state.link}
            url={this.state.url}
            cidadeTeste={this.state.cityteste}
          />

           <Map 
              expande={this.expande}
              longitude = { localStorage.getItem('longitude') }
              latitude = { localStorage.getItem('latitude') }
           />

           
            <WeatherBlock 
              expande={this.expande}
              temp={this.state.temperature}
              wind={this.state.wind}
              tempMax={this.state.tempMax}
              tempMin={this.state.temp_min}
              humidade={this.state.humidity}
              desc={this.state.description}
              bairro={this.state.cidade}
              cidade={this.state.cidade}
            />
          
        </div>
        )      
    }
}

export default Application;