import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
