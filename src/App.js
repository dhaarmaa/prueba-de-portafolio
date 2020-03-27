import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Navigation from "../src/components/Navigation"
import Home from "../src/views/Home";
import Project from "../src/views/Project";
import About from "../src/views/About";


function App() {
  return (
    <div className="App">
   
      <Router>
     
        <Switch>
          <Route exact path="/" component= { Home } />
          <Route path="/home" component= { Home } />
          <Route path="/project" component={ Project } />
          <Route path="/about" component= { About } />
        </Switch>
        
      </Router>
    </div>
  );
}


export default App;
