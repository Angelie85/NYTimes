import React from 'react'
import SearchBox from '../containers/searchBoxContainer'
import '../App.css'

const TopHeader = () => {
  return(
    <div>
      <div className='App-header'>
        <h3>THE TIMES</h3>
      </div>
      <div className='App-intro'>
        <SearchBox />
      </div>
    </div>
  )
}

export default TopHeader
