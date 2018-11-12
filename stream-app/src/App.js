import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Game from './Game.js'

class App extends Component {

  render() {
    return (
      <div className='app'>
        <Router>
          <Route exact path="/" component={Game} />
        </Router>
      </div>
    )
  }
}

export default App;
