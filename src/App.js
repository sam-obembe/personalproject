import React, { Component } from 'react';
import './styles/App.css'
import Header from './components/Header'
import routes from './routes'
import {Provider} from 'react-redux'
import store from './ducks/store'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div id = "App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
        <Header/>
        
        {routes}
      </div>
      </Provider>
    );
  }
}

export default App;
