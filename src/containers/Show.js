import React, { Component } from 'react'
import movies from '../reducers/movies';


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
        <img className="show-image" src={this.state.movies.image} />
        <h1 className="show-title" >{this.state.movies.title}</h1>
        <p className="show-description">{this.state.movies.description}</p>
         <h3 className="show-category">{this.state.movies.category}</h3>
        <p className="show-year">{this.state.movies.year}</p>
      </div>
    
     );
  }
}
 
export default Show;



 