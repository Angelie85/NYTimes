import { connect } from 'react-redux'
import homeComponent from '../components/homeComponent'
import {fetchTopStories,selectNews } from '../actions/index'

function mapStateToProps (state) {
  return {
    topList: state.NYTimes.topList ? state.NYTimes.topList.results : [],
    newsList: state.NYTimes.newsList && state.NYTimes.newsList.response ? state.NYTimes.newsList.response.docs : [],
    searchKeyword: state.NYTimes.searchKeyword? state.NYTimes.searchKeyword:''
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchTopStories: ()=>{ dispatch(fetchTopStories()) },
    selectNews: (news, type)=>{ dispatch(selectNews(news, type)) }
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
)(homeComponent)
