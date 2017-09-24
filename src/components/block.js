import React from 'react';


const Block = ({pubDate, imgSrc, imgHeight, imgWidth, source, headline, id}) => {
  return (
    <div key={id} className="blockCls">
      {imgSrc  ? <img style={{padding: '0 20px 0 0'}} alt='' height={imgHeight} width={imgWidth} src={imgSrc}/>:''}
      <div style={{flex: 1}}>
        <div className="headlineCls">{headline}</div>
        <div style={{fontSize: '12px'}}><div className="sourceCls">{source}</div><div className="dateCls"> {pubDate}</div></div>
      </div>
    </div>
  )
};

export default Block
