import './App.css';
import Header from '../components/Header';
import React, { Component } from 'react';
import MovieCard from '../components/MovieCard'
import Row from './row';
import Show from './Show'
import store from '../store.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";
import Movie from './Movie'
//import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/movies')
     .then(respone => respone.json())
     .then(movies => this.setState({ movies }))
  }
  
  
  render(){
    debugger
    console.log(store)
  return (
    <Router>
      <Switch>
        
      <Route exact  path="/movies:id"  component={Show}/> 
    <div className="App">
      <Header/>
      <Row title={"Recently Added"} movies={this.state.movies}/>
      <Row title={"Trending Now"} movies={this.state.movies}/>
      <Row title={"Popular on Netflix"} movies={this.state.movies}/>
      <MovieCard  movie={this.state.movies} />
      <Movie movies={this.state.movies} />
      <Movie movies={this.state.movies} />
  
    </div>
    </Switch>
    </Router>
  );
  }
}

export default App;
 
 