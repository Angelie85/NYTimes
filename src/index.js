import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// add libraries
import { Provider } from 'react-redux'
import mainReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'

const createStoreWithMiddleware = applyMiddleware( ReduxThunk, logger )(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(mainReducer)}>
  <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
