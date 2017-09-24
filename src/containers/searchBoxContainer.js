import { connect } from 'react-redux'
import searchBoxComponent from '../components/searchBoxComponent'
import {setSearchKeyword, fetchSearchResult} from '../actions/index'

function mapStateToProps (state) {
  return {
    searchKeyword: state.NYTimes.searchKeyword ? state.NYTimes.searchKeyword : '',
    page: state.NYTimes.page
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setSearchKeyword: (k) => { dispatch(setSearchKeyword(k)) },
    fetchSearchResult: (keyword, page) => { dispatch(fetchSearchResult(keyword, page)) }
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
)(searchBoxComponent)
