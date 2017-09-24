import { connect } from 'react-redux'
import navBarComponent from '../components/navBarComponent'
import {setSearchKeyword,setPageCount} from '../actions/index'

function mapStateToProps (state) {
  return {
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setSearchKeyword: (k) => { dispatch(setSearchKeyword(k)) },
    setPageCount: (page) => { dispatch(setPageCount(page)) }
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
)(navBarComponent)
