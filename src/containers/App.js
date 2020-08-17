import './App.css';
import Header from '../components/Header';
import React, { Component } from 'react';
import Row from './row';
import Show from '../containers/Show'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import MovieForm from './MovieForm';
import Recently from './Recently'
import Nav from '../components/Nav';
//import PageNotFound from '../components/PageNotFound';
import Home from './Home';



class App extends Component {
  
  render(){
    
  return (
    <Router>
       <Nav/>
      <Switch>
      <Route exact  path="/home"  component={Home}/> 
          <Route exact  path="/movies/new"  component={MovieForm}/> 
          <Route exact  path="/movies/:id"  component={Show}/> 
         
          <div className="App">
            <Header/>
            <Recently/>
            <Row title="Trending Now" />
            <Row title="Popular on Netflix" />
         </div>
     </Switch>
    </Router>
  );
  }
}

export default App;
 
 