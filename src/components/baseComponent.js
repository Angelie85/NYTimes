import React, {Component} from 'react';
import TopHeader from './header';
import NavBar from '../containers/navBarContainer';
import Breadcrumb from './breadcrumb';

class baseComponent extends Component {
  logoClk () {
    window.location.href = 'https://www.nytimes.com'
  }

  render () {
    return (
      <div className='App'>
        <TopHeader/>
        <NavBar/>
        <div style={{textAlign: 'left', padding: '20px'}}>
          <Breadcrumb/>
          {this.props.children}
        </div>
        <img alt='New York Times'
             style={{cursor:'pointer', paddingBottom: '50px'}}
             src={require('../images/poweredby_nytimes_150c.png')}
             onClick={() => this.logoClk()} />
      </div>
    )
  }
}
export default baseComponent
