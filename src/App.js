import React, { Component } from 'react'
import './App.css'
import Home from './containers/homeContainer'
import Article from './containers/articleContainer'
import World from './containers/worldContainer'
import National from './containers/usContainer'
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
             <Route path='/world' component={World} />
             <Route path='/us' component={National} />
          </div>
        </BrowserRouter>

      </div>
    )
  }
}

export default App
