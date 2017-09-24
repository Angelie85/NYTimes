import React, {Component} from 'react'
import Block from './block'
import Pagination from '../containers/paginationContainer'
import {NavLink} from 'react-router-dom'
import BaseComponent from './baseComponent'
class Home extends Component {

  componentWillMount(){
    this.props.fetchTopStories()
  }


  isoToDate(isoDate){
    let date = new Date(isoDate);
    let timeZone = date.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
    let hour = date.getHours()-12>0?date.getHours()-12:date.getHours();
    let min = date.getMinutes().toString().length===1? '0'+date.getMinutes().toString():date.getMinutes();
    let ampm = date.getHours()-12<0?'AM':'PM';
    return (date.getMonth()+1) + '-'+date.getDate()+'-'+date.getFullYear()+' '+ hour+':'+min+ampm+' '+ timeZone;
  }

  render () {
    const haveSearched = this.props.searchKeyword.length!==0;
    return (
      <BaseComponent>
        <h3>Top Stories</h3>
          {haveSearched ? <Pagination/>:''}
          {haveSearched ?  this.props.newsList.map((item, i) => (
            <NavLink to="/article" onClick={()=>this.props.selectNews(item, 'search')} key={i}>
            <Block
              className="blockCls"
              key={i}
              id = {item._id}
              item={item}
              pubDate={this.isoToDate(item.pub_date)}
              imgSrc = {item.multimedia.length > 0 ?'http://www.nytimes.com/'+ item.multimedia[1].url :""}
              imgHeight =  {item.multimedia.length > 0 ?item.multimedia[1].height :""}
              imgWidth= {item.multimedia.length > 0 ?item.multimedia[1].width :""}
              source ={item.byline && item.byline.original !== undefined && item.byline.original!==null? item.byline.original.toLowerCase() : 'By ' + item.source}
              headline = {item.headline? item.headline.main: item.title}
            />
            </NavLink>
              )
            ) :
          this.props.topList && this.props.topList.length !== 0 ? this.props.topList.map((item, i) => (
              <NavLink to="/article" key={i}  onClick={()=>this.props.selectNews(item,'top')}>
                <Block
                  key={i}
                  id = {item._id}
                  item={item}
                  pubDate={this.isoToDate(item.created_date)}
                  imgSrc = {item.multimedia.length > 0 ?item.multimedia[1].url :""}
                  imgHeight =  {item.multimedia.length > 0 ?item.multimedia[1].height :""}
                  imgWidth= {item.multimedia.length > 0 ?item.multimedia[1].width :""}
                  source ={item.byline.toLowerCase()}
                  headline = {item.title}
                />
              </NavLink>
                )) :""}
      </BaseComponent>
    )
  }
}
export default Home
