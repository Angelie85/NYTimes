import { connect } from 'react-redux'
import usComponent from '../components/usComponent'
import {selectNews, fetchTopStoriesNational } from '../actions/index'

function mapStateToProps (state) {
  return {
    usList: state.NYTimes.usList ? state.NYTimes.usList.results : [],
    newsList: state.NYTimes.newsList && state.NYTimes.newsList.response ? state.NYTimes.newsList.response.docs : [],
    searchKeyword: state.NYTimes.searchKeyword? state.NYTimes.searchKeyword:''
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchTopStoriesNational: ()=>{ dispatch(fetchTopStoriesNational()) },
    selectNews: (news, type)=>{ dispatch(selectNews(news, type)) }
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
)(usComponent)
