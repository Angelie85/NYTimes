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
        <NavLink to="/"
                 className={window.location.pathname.length===1?"navLinkCls navBlockSelected" :"navBlock" } onClick={this.onNavBarClick()}>
          <div>Home</div>
        </NavLink>
        <NavLink to ="/world"
                 className={window.location.pathname.indexOf('world')!==-1?" navBlockSelected navLinkCls" :"navBlock"}onClick={this.onNavBarClick()}>
          <div>World</div>
        </NavLink>
        <NavLink to ="/us"
                 className={window.location.pathname.indexOf('us')!==-1?" navBlockSelected navLinkCls" :"navBlock"}onClick={this.onNavBarClick()}>
          <div>U.S</div>
        </NavLink>
        <div className="navBlock">Politics</div>
        <div className="navBlock">N.Y</div>
        <div className="navBlock">More</div>
      </div>
    )
  }
}

export default navBarComponent
