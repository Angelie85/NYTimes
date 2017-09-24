import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// add libraries
import { Provider } from 'react-redux'
import mainReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(mainReducer)}>
  <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
