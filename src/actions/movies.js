//Action creator 
const setMovies = movies => {
    return {
         type: 'GET_MOVIES',
         movies 
    }
}

// Async Actions
 export const getMovies =  () => {
    return dispatch => {
        return fetch('http://localhost:3000/movies')
         .then(respone => respone.json())
         .then(movies => dispatch(setMovies(movies)))
         .catch(error => console.log(error))
    }
}
