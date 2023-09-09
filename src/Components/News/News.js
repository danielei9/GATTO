import React, { Component } from "react";
import "./News.css"
//Temporarily store data here
const PostsData = [
    {
      "category": "Gattos por el mundo",
      "title": "Encontramos un Gato Roto en Gatto",
      "text": "Encuentran un gato roto en Gatto avistado por that G.",
      "image": "https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-avatar-memes-cats-35.jpg"
    },
    {
      "category": "MIAUMIAU",
      "title": "Confesiones de un gatto",
      "text": " Fingí dormir durante toda la noche , ¡pero estaba en la fiesta gaTTo!",
      "image": "https://media.istockphoto.com/id/955853964/es/foto/corte-siam%C3%A9s-gato-fiesta-cumplea%C3%B1os-sombrero.jpg?s=612x612&w=0&k=20&c=6ulSn39DWscT_nPLOnRjKjv_yw_aSJ2qXF0BfvGIz2E="
    },
    {
      "category": "Miau",
      "title": "Miau miau miau ",
      "text": "miaumiau miaumiuamiuamiuamiuamiaumiua miaumiuamiu",
      "image": "https://media.istockphoto.com/id/1434414228/es/foto/gato-triste-severo-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=QGGbL2hCXlHUOYAy9E9X4ltZDYfI7a9yMd7Hio3ZK4A="
    }
  ]
  
  
  // Start App
  
 export default class News extends React.Component { 
    constructor() {
      super();
      
      this.state = {
        posts: {}
      }
    }
    componentWillMount() {
      this.setState({
        posts: PostsData
      });
    }
   
  
    render() {
      return <div id="news" style={{display:"flex"}}>
        <Title id=""/>
        <div className="app-card-list" id="app-card-list">
          {
            Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)
          }
      </div>
      </div>
    }
  }
  
  
class Title extends React.Component {
  render() {
    return <section className="app-title">
      <div className="app-title-content">
        <h1 id="titleNews">Latest News</h1>
        <p>Covering 2027</p>
      </div>
    </section>
  }
}


class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}
class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = { 
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'contain', // Mantener la imagen dentro del área sin zoom
      // backgroundSize: 'cover', // Ajvusta el tamaño para cubrir el fondo sin distorsión
      backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
   height:"400px"
    };
    return (
  <img style={style} src={image}/>
    )
  }
}



class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <p className="date">Septiembre 2047</p>
        
        <h2>{this.props.title}</h2>
        
        <p className="body-content">{this.props.text}</p>
        
        <Button />
      </div>
    )
  }
}


class Card extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader category={this.props.details.category} image={this.props.details.image}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    )
  }
}
  