import React, {Component}from 'react'
import {NavLink} from 'react-router-dom';

class navBarComponent extends Component {

  onNavBarClick(){
    this.props.setPageCount(0);
    this.props.setSearchKeyword('');
  }
  render() {
    return (
      <div className="navBar">
        <NavLink to="/home" className="navLinkCls navBlockSelected" onClick={this.onNavBarClick()}>
          <div >Home</div>
        </NavLink>
        <div className="navBlock">World</div>
        <div className="navBlock">U.S</div>
        <div className="navBlock">Politics</div>
        <div className="navBlock">N.Y</div>
        <div className="navBlock">More</div>
      </div>
    )
  }
}

export default navBarComponent
