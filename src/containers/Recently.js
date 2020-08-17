import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movies'
class Movie extends Component {
    
    componentDidMount(){
        this.props.getMovies()
    }
    
    render() { 
        return (   
            <div>
            <h1 className="title-text">Recently Added</h1>
             <div className="Movie-Container">
                 
                     {this.props.movies.reverse().map(movie => 
                          <div key={movie.id} className="Movie-Card">
                              <img className="Movie-Image" src={movie.image} alt={movie.title}/>
                           </div> )}
             </div> 
             </div>
         );
    }
 }
 
 const mapStateToProps = (state) => {
    return ({
        movies: state.movies
    })
}
export default connect(mapStateToProps,{ getMovies })(Movie);