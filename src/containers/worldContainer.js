import { connect } from 'react-redux'
import worldComponent from '../components/worldComponent'
import {selectNews, fetchTopStoriesWorld } from '../actions/index'

function mapStateToProps (state) {
  return {
    worldList: state.NYTimes.worldList ? state.NYTimes.worldList.results : [],
    newsList: state.NYTimes.newsList && state.NYTimes.newsList.response ? state.NYTimes.newsList.response.docs : [],
    searchKeyword: state.NYTimes.searchKeyword? state.NYTimes.searchKeyword:''
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchTopStoriesWorld: ()=>{ dispatch(fetchTopStoriesWorld()) },
    selectNews: (news, type)=>{ dispatch(selectNews(news, type)) }
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
)(worldComponent)
