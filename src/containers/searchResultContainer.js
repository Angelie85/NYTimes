import { connect } from 'react-redux'
import searchResultComponent from '../components/searchResultComponent'
import {fetchSearchResult } from '../actions/index'

function mapStateToProps (state) {
  return {
    newsList: state.NYTimes.newsList && state.NYTimes.newsList.response ? state.NYTimes.newsList.response.docs : []
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchSearchResult: (keyword, page) => { dispatch(fetchSearchResult(keyword, page)) },
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
)(searchResultComponent)
