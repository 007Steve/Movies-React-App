import { createStore,applyMiddleware,combineReducers,compose } from 'redux'
import thunk from 'redux-thunk'



 const  moviesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_MOVIES': 
        return action.movies;

        default:
            return state;
    }
 }


 const reducers =  combineReducers({
    movies: moviesReducer
 })

 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const middleware = [thunk];

 export default createStore(
    reducers,
    composeEnhancer(applyMiddleware(...middleware)),

)
