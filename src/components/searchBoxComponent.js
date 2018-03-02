import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class searchBoxComponent extends Component {

  onSearchSubmit (e) {
    e.preventDefault();
    this.props.setSearchKeyword(e.target.elements[0].value);
    this.props.fetchSearchResult(e.target.elements[0].value, this.props.page ? this.props.page : 0);
    //route back to home where show the result of search
    this.props.history.push('/')
  }

  render () {
    return (
      <div className="searchBar">
        <form style={{    position: 'relative', top: '-44px', textAlign: 'right',right: '39px'}} onSubmit={(e) => this.onSearchSubmit(e)}>
          <input
            style={{ borderRadius: '8px', height: '16px'}}
            placeholder={this.props.searchKeyword !== undefined && this.props.searchKeyword !== '' ? this.props.searchKeyword : 'Search'} onSubmit={(e) => this.onSearchSubmit(e)} />
        </form>
      </div>
    )
  }
}

export default withRouter(searchBoxComponent)
