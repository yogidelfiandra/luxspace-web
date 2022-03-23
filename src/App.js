import Cart from 'pages/Cart';
import Congratulation from 'pages/Congratulation';
import Details from 'pages/Details';
import HomePage from 'pages/HomePage';
import NotFound from 'pages/NotFound';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/categories/:idc' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route path='/congratulation' component={Congratulation} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
