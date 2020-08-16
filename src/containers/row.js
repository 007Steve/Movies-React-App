import React from 'react'
import Movie from './Movie'
const Row = (props) => {
    return (  
      <div>
          <h1 className="title-text">{props.title}</h1>
         <Movie />
      </div>
    );
}
 
export default Row;

