import React from 'react'
import {NavLink} from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <div style={{display:'flex', fontSize:'18px'}}>
      <NavLink to="/" style={window.location.href.indexOf('home')===-1? {color:"#42bff4", paddingRight:"10px"}:{color:"#000000", paddingRight:"10px"}}>
        <div >Home</div>
      </NavLink>
      <div style={{color:"#666666", paddingRight:"10px"}} >
        {String.fromCharCode(62)}
      </div>
      <NavLink to="/article" style={window.location.href.indexOf('article')===-1? {color:"#42bff4", paddingRight:"10px"}:{color:"#000000", paddingRight:"10px"}}>
        <div >Article</div>
      </NavLink>
    </div>
  )
}

export default Breadcrumb
