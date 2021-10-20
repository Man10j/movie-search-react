import React from 'react';
import Home from './components/Home';
import './App.css';
import Searchresult from './components/Searchresult';
import Wishlist from './components/Wishlist';
import Preview from './components/Preview';


import {BrowserRouter, Route,Switch, Redirect} from 'react-router-dom';
const App =() =>{
  return(
    <BrowserRouter>
      <div>
        <Redirect to="/home" />
        <Route exact path="/home" component={Home} />
        <Route path="/searchresult" component={Searchresult} />
         <Route exact path="/wishlist" component={Wishlist} />
         <Route path="/Preview/:movie/" component={Preview}/>
      </div>
    </BrowserRouter>

  )
}

export default App;
