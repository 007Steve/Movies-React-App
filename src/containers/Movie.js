import React, { Component } from 'react'
import MovieCard from '../components/MovieCard'
import MovieForm from './MovieForm'


class Movie extends Component {
    
    
    render() { 
        return (   
         <div className="Movie-Container">
            <h1>Movies component</h1>
            {this.props.movies.map(movie => <MovieCard key={movie.id}movie={movie} />)}
            <MovieForm />
         </div> 
        
         );
    }
}
 
export default Movie;