import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          {
            // Here we are not taking advantage of Routing, but, in a real
            // scenario, these Route will give us the possibility of switch
            // pages depending the URL.
          }
          <Route path='/items/:id' component={ Home } />
          <Route path='/items' component={ Home } />
          <Route path='/' component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default App;
