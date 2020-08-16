import './App.css';
import Header from '../components/Header';
import React, { Component } from 'react';
import Row from './row';
import Show from './Show'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";



class App extends Component {
  
  render(){
    
  return (
    <Router>
      <Switch>
       <Route exact  path="/movies:id"  component={Show}/> 
        <div className="App">
         <Header/>
         <Row title="Recently Added" />
         <Row title="Trending Now" />
         <Row title="Popular on Netflix" />
       </div>
     </Switch>
    </Router>
  );
  }
}

export default App;
 
 