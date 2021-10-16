import React from 'react';
import Home from './components/Home';
import './App.css';
import Searchresult from './components/Searchresult';
import {BrowserRouter, Route,Switch, Redirect} from 'react-router-dom';
const App =() =>{
  return(
    <BrowserRouter>
      <div>
        <Redirect to="/home" />
        <Route exact path="/home" component={Home} />
        <Route exact path="/searchresult" component={Searchresult} />
      </div>
    </BrowserRouter>

  )
}

export default App;
