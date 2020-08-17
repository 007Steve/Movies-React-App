import { resetMovieForm } from './movieForm'

//Action creator 
const setMovies = movies => {
    return {
         type: 'GET_MOVIES',
         movies 
    }
}
const addMovie = movie => {
    return {
        type:'CREATE_MOVIE',
        movie 
    }
}

// Async Actions
 export const getMovies =  () => {
    return dispatch => {
        return fetch(`http://localhost:3000/movies/`)
         .then(respone => respone.json())
         .then(movies => dispatch(setMovies(movies)))
         .catch(error => console.log(error))
    }
}

export const createMovie = movie => {
    return dispatch => {
        return fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({movie: movie})
        })
        .then(response => response.json())
        .then(movie => 
            dispatch(addMovie(movie)),
            dispatch(resetMovieForm())
        )
        .catch(error => console.log(error));

    }
}