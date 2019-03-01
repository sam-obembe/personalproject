import React, { Component } from 'react';
import './styles/App.css'
//import Header from './components/Header'
import routes from './routes'
import {Provider} from 'react-redux'
import store from './ducks/store'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className = "App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
        {/* <Header/> */}
        
        {routes}
      </div>
      </Provider>
    );
  }
}

export default App;


/*
Explanation

The routes are defined in routes.js and imported. 
The {Provider} is brought in from 'react-redux' and the store from the store.js file located in the ducks folder
Everything in the app is wrapped in the provider, including all the components in that will come through the routes {routes}. This will give them access to the combined state in the store. 
*/