import React, {Component} from 'react'

class Pagination extends Component {
  next () {
    // the api limited maximum page to 200
    if(this.props.page<200){
      let currentPage = this.props.page+1;
      this.props.setPageCount(currentPage);
      this.props.fetchSearchResult(this.props.searchKeyword, currentPage)
    }
  }

  prev(){
    if(this.props.page>0){
      let currentPage = this.props.page-1;
      this.props.setPageCount(currentPage);
      this.props.fetchSearchResult(this.props.searchKeyword, currentPage)
    }
  }
  render () {
    return (
      <div style={{ fontSize: '12px', width: '100%', display: 'flex'}}>
        <div style={{flex: '4'}} />
        <div style={{flex: '1'}}>
          <div style={{width: '150px', display: 'flex', alignItems: 'flex-end'}}>
            <div className={this.props.page===0?"pageDisableCls":"pageCls"} onClick={() => this.prev()}> {String.fromCharCode(60) + String.fromCharCode(60)} prev </div>
            <div style={{flex: '1'}}>Page {this.props.page ? this.props.page+1 : 1}</div>
            <div className={this.props.totalPage === this.props.page+1?"pageDisableCls":"pageCls"} onClick={() => this.next()}> next {String.fromCharCode(62) + String.fromCharCode(62)}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Pagination
