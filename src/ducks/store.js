import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'


import reducer from './reducers/reducer'


const store = createStore(reducer,composeWithDevTools(applyMiddleware(promiseMiddleware)))

export default store


