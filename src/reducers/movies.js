
export default (state = [], action) => {
    switch(action.type) {
        case 'GET_MOVIES': 
        return action.movies;

        case 'CREATE_MOVIE':
            return state.concat(action.movie)
        default:
            return state;
    }
 }