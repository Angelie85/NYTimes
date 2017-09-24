import { connect } from 'react-redux'
import pagination from '../components/paginationComponent'
import {fetchSearchResult, setPageCount} from '../actions/index'

function mapStateToProps (state) {
  return {
    page: state.NYTimes.page,
    searchKeyword: state.NYTimes.searchKeyword,
    totalPage: state.NYTimes.totalPage
  }
}
function mapDispatchToProps (dispatch) {
  return {
    fetchSearchResult: (keyword, page) => { dispatch(fetchSearchResult(keyword, page)) },
    setPageCount: (page) => { dispatch(setPageCount(page)) }
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
)(pagination)
