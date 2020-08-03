import React from 'react'
import MovieCard from '../components/MovieCard'
const Row = (props) => {
    return (  
        <div className="Movie-Container">
           <h1>Movies component</h1>
            {props.movies.map(movie => 
            <div key={movie.id} className="Movie-Card">
              <img className="Movie-Image" src={movie.image} alt={movie.title}/>
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
              <h3>{movie.category}</h3>
              <h3>{movie.year}</h3>
            </div> 
          )}
        </div> 
    );
}
 
export default Row;