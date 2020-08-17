import React, { Component } from 'react'
//import movies from '../reducers/movies';
import './show.css'; 

class Show extends Component {
  
    state = { movies:[] }
  

  componentDidMount(){
    let id = this.props.match.params.id
   fetch(`http://localhost:3000/movies/${id}`)
        .then(respone => respone.json())
        .then(movies => { 
          this.setState({ movies: movies})
           console.log(movies)
         })
  }
  render() { 
debugger
    return ( 
      <div className="show-container">
       <img className="show-image" src={this.state.movies.image} alt={this.state.movies.title} />
       <div className="show-info">
       <h1 className="show-title" >{this.state.movies.title}</h1>
        <p className="show-description"> <strong>Description :</strong> {this.state.movies.description}</p>
         <h3 className="show-category"><strong>Category:</strong>  {this.state.movies.category}</h3>
        <h3 className="show-year"> <strong>Year :</strong> {this.state.movies.year}</h3>
       </div>
        
      </div>
    
     );
  }
}
 
export default Show;



 