import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import routes from './routes'
import {Provider} from 'react-redux'
import store from './ducks/store'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div id = "App">
        <Header/>
        
        {routes}
      </div>
      </Provider>
    );
  }
}

export default App;
