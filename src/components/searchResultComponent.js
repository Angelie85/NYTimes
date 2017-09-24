import React, {Component} from 'react'
import Block from './block'
import Pagination from '../containers/paginationContainer'
import TopHeader from './header'

class searchResultComponent extends Component {

  render () {
    const isTopStoryPage = (this.props.newsList && this.props.newsList.length!==0);
    return (
      <div className='App'>
        <TopHeader/>
        <div style={{textAlign: 'left', padding: '20px'}}>

          <h3>Search Result</h3>
          <Pagination/>
          {this.props.newsList.map((item, i) => (<Block key={i} item={item} />))} :
        </div>
      </div>
    )
  }
}
export default searchResultComponent
