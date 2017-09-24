import React, {Component} from 'react';
import BaseComponent from './baseComponent';

class Article extends Component{
  isoToDate(isoDate){
    let date = new Date(isoDate);
    let timeZone = date.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2];
    let hour = date.getHours()-12>0?date.getHours()-12:date.getHours();
    let min = date.getMinutes().toString().length===1? '0'+date.getMinutes().toString():date.getMinutes();
    let ampm = date.getHours()-12<0?'AM':'PM';
    return (date.getMonth()+1) + '-'+date.getDate()+'-'+date.getFullYear()+' '+ hour+':'+min+ampm+' '+ timeZone;
  }


  render() {
    let isNewsDetailEmpty = Object.keys(this.props.newsDetail).length===0;
    const isTopNews = this.props.newsType==='top';
    let news,imgSrc, imgHeight,imgWidth;
    if(!isNewsDetailEmpty){
      news = this.props.newsDetail;
      imgSrc = news.multimedia.length > 0 ?isTopNews?news.multimedia[1].url:'http://www.nytimes.com/'+news.multimedia[1].url :"";
      imgHeight =  news.multimedia.length > 0 ?news.multimedia[1].height :"";
      imgWidth= news.multimedia.length > 0 ?news.multimedia[1].width :"";
    }

    return (
      <BaseComponent>
        {!isNewsDetailEmpty?(
          <div>
            <div style={{textAlign: 'left', padding: '20px'}}>
              <div className="fullArticleTitle">{isTopNews? news.title:news.headline.main}</div>
              <br/><br/>
              <div className="sourceCls">{isTopNews?news.byline.toLowerCase():news.byline.original.toLowerCase()}</div>
              <div className="dateCls">{isTopNews?this.isoToDate(news.published_date):this.isoToDate(news.pub_date)}</div>
            </div>
            <div className="fullArticleCls">
              {news.multimedia.length>0 ? <img style={{padding: '0 20px 0 0'}} alt='' height={imgHeight} width={imgWidth} src={imgSrc}/> : ''}
              <div>{isTopNews?news.abstract: news.snippet}</div>
            </div>
          </div>
          ):(<div style={{padding:'30px 0px'}}>No article selected</div>)}
      </BaseComponent>
    )
  }
}

export default Article
