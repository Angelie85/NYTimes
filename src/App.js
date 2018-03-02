import React, { Component } from 'react'
import './App.css'
import Home from './containers/homeContainer'
import Article from './containers/articleContainer'
// import header from './components/header'
// import { Route, IndexRoute, Router } from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  logoClk () {
    window.location.href = 'https://www.nytimes.com'
  }

  render () {
    return (
      <div className='App'>
        <BrowserRouter>
           <div>
             <Route path='/' exact component={Home} />
            <Route path='/article' component={Article} />
          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default App
