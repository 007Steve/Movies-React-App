import React, { Component } from 'react'
import MovieCard from '../components/MovieCard'
import MovieForm from './MovieForm'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movies'
class Movie extends Component {
    
    componentDidMount(){
        this.props.getMovies()
    }
    
    render() { 
        return (   
             <div className="Movie-Container">
                     {this.props.movies.map(movie => 
                          <div key={movie.id} className="Movie-Card">
                              <img className="Movie-Image" src={movie.image} alt={movie.title}/>
                           </div> )}
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