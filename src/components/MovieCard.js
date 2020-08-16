 import React from 'react';
import './movieCard.css';  
const MovieCard = ({movie}) => {

    return (   
        <div key={movie.id} className="Movie-Card">
        <img className="Movie-Image" src={movie.image} alt={movie.title}/>
       
      </div> );
}
  
export default MovieCard;


