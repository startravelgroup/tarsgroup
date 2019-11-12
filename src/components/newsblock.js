import React from 'react'
import Newstwo from './newstwo'
import '../style/newsblock.css'


class NewsBlock extends React.Component{
    constructor(props){
        super(props);
        this.getNews1 = this.getNews1.bind(this)
        this.getNews2 = this.getNews2.bind(this)
        this.getNews3 = this.getNews3.bind(this)
        this.getNews4 = this.getNews4.bind(this)

        this.state = {
            autor1: undefined,
            titulo1: undefined,
            descricao1: undefined,
            publishe1: undefined,
            link1: undefined,
            url1: undefined,
            dataFormat1: undefined,

            autor2: undefined,
            titulo2: undefined,
            descricao2: undefined,
            publishe2: undefined,
            link2: undefined,
            url2: undefined,
            dataFormat2: undefined,

            autor3: undefined,
            titulo3: undefined,
            descricao3: undefined,
            publishe3: undefined,
            link3: undefined,
            url3: undefined,
            dataFormat3: undefined,

            autor4: undefined,
            titulo4: undefined,
            descricao4: undefined,
            publishe4: undefined,
            link4: undefined,
            url4: undefined,
            dataFormat4: undefined
        }


        this.getNews1()
        this.getNews2()
        this.getNews3()
        this.getNews4()
    }


 

    getNews1 = async(e) =>{


        const API_NEWS = await fetch(`https://newsapi.org/v2/top-headlines?country=br&apiKey=7ddb2674bef44f9d99dfdef3a6c601f1`)
        const API_DATA = await API_NEWS.json()
        console.log(API_DATA)
        var cod = Math.floor(Math.random() * 19);
    
        var data = API_DATA.articles[cod].publishedAt.split("-")
    
        var dataFormat = data[2].substring(0, 2) + "/" + data[1] + "/" + data[0];
    
        var title = API_DATA.articles[cod].title.substring(0, 15)
     
        if(API_DATA.articles[cod].author === "" || API_DATA.articles[cod].publishedAt === "" || API_DATA.articles[cod].urlToImage === ""){
            this.getNews1();
        }else{
          this.setState({
            autor1: API_DATA.articles[cod].author,
            titulo1: title,
            descricao1: API_DATA.articles[cod].description,
            publishe1: API_DATA.articles[cod].publishedAt,
            link1: API_DATA.articles[cod].url,
            url1: API_DATA.articles[cod].urlToImage,
            dataFormat1: dataFormat
          })
        }
        
       
      }

      getNews2 = async(e) =>{

        const API_NEWS = await fetch(`https://newsapi.org/v2/top-headlines?country=br&apiKey=7ddb2674bef44f9d99dfdef3a6c601f1`)
        const API_DATA = await API_NEWS.json()
    
        console.log(API_DATA)
    
        var cod = Math.floor(Math.random() * 19);
    
        var data = API_DATA.articles[cod].publishedAt.split("-")
    
        var dataFormat = data[2].substring(0, 2) + "/" + data[1] + "/" + data[0];
    
        var title = API_DATA.articles[cod].title.substring(0, 15)
     
        
        this.setState({
          autor2: API_DATA.articles[cod].author,
          titulo2: title,
          descricao2: API_DATA.articles[cod].description,
          publishe2: API_DATA.articles[cod].publishedAt,
          link2: API_DATA.articles[cod].url,
          url2: API_DATA.articles[cod].urlToImage,
          dataFormat2: dataFormat
        })
       
      }

      getNews3 = async(e) =>{

        const API_NEWS = await fetch(`https://newsapi.org/v2/top-headlines?country=br&apiKey=7ddb2674bef44f9d99dfdef3a6c601f1`)
        const API_DATA = await API_NEWS.json()
    
        console.log(API_DATA)
    
        var cod = Math.floor(Math.random() * 19);
    
        var data = API_DATA.articles[cod].publishedAt.split("-")
    
        var dataFormat = data[2].substring(0, 2) + "/" + data[1] + "/" + data[0];
    
        var title = API_DATA.articles[cod].title.substring(0, 15)
     
        
        this.setState({
          autor3: API_DATA.articles[cod].author,
          titulo3: title,
          descricao3: API_DATA.articles[cod].description,
          publishe3: API_DATA.articles[cod].publishedAt,
          link3: API_DATA.articles[cod].url,
          url3: API_DATA.articles[cod].urlToImage,
          dataFormat3: dataFormat
        })
       
      }


      getNews4 = async(e) =>{

        var request = require("request");

          var options = {
            method: 'GET',
            url: 'https://faroo-faroo-web-search.p.rapidapi.com/api',
            qs: {q: 'science'},
            headers: {
              'x-rapidapi-host': 'faroo-faroo-web-search.p.rapidapi.com',
              'x-rapidapi-key': '69b4babca5msh5fa3daa87d1279bp12e47djsnd076e0c7b06d'
            }
          };

          var cod = Math.floor(Math.random() * 10);

          request(options, function (error, response, body) {
            if (error) throw new Error(error);
            console.log("testeeeeeeeee")
            var body = JSON.parse(body);
            console.log(body);

            
            localStorage.setItem("author", body.results[cod].author);
            localStorage.setItem("title", body.results[cod].title);
            localStorage.setItem("descricao", body.results[cod].kwic);
            localStorage.setItem("publishe", body.results[cod].date);
            localStorage.setItem("link", body.results[cod].url);
            localStorage.setItem("url", body.results[cod].url);
            localStorage.setItem("dataFormat", body.results[cod].date);

            
          });

          this.setState({
              autor4: localStorage.getItem("author"),
              titulo4: localStorage.getItem("title"),
              descricao4:  localStorage.getItem("descricao"),
              publishe4: localStorage.getItem("publishe"),
              link4: localStorage.getItem("link"),
              url4: localStorage.getItem("url"),
              dataFormat4: localStorage.getItem("dataFormat")
            })

          

      }
    

    render (){
    return(
                <div className="newsblock-app" >
                   
                        <div className="animated fadeIn delay-03s">
                            <Newstwo
                                
                                autor={this.state.autor1}
                                titulo={this.state.titulo1}
                                publishe={this.state.publishe1}
                                data={this.state.data1}
                                link={this.state.link1}
                                url={this.state.url1}
                            />
                        </div>
    
                        <div className="animated fadeIn delay-05s">
                            <Newstwo
                                
                                autor={this.state.autor2}
                                titulo={this.state.titulo2}
                                publishe={this.state.publishe2}
                                data={this.state.data2}
                                link={this.state.link2}
                                url={this.state.url2}
                            />
                        </div>
                        <div className="animated fadeIn delay-07s">
                            <Newstwo
                                
                                autor={this.state.autor3}
                                titulo={this.state.titulo3}
                                publishe={this.state.publishe3}
                                data={this.state.data3}
                                link={this.state.link3}
                                url={this.state.url3}
                            />
                        </div>
                        {this.props.cityteste === undefined
                        ?
                        <div className="animated fadeIn delay-07s">
                            <Newstwo
                                autor={this.state.autor4}
                                titulo={this.state.titulo4}
                                publishe={this.state.publishe4}
                                data={this.state.data4}
                                link={this.state.link4}
                                url={this.state.url4}
                            />
                        </div>
                        :
                        ""
                        
                        }
                        
                    
                </div>
            )
    }
    

}

export default NewsBlock;
