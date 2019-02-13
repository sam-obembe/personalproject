import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Landing/>
        {routes}
      </div>
    );
  }
}

export default App;
