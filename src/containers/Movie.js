import React, { Component } from 'react'
//import MovieCard from '../components/MovieCard'
//import MovieForm from './MovieForm'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movies'
import { Link } from 'react-router-dom'

class Movie extends Component {
    
    componentDidMount(){
        this.props.getMovies()
    }
    
    render() { 
        return (   
             <div className="Movie-Container">
                     {this.props.movies.map(movie => 
                          <div key={movie.id} className="Movie-Card">
                               <Link to={'/movies/' + movie.id} >
                              <img className="Movie-Image" src={movie.image} alt={movie.title}/>
                              </Link>   
                           </div>
                    
                         )}
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