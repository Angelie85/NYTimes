import { connect } from 'react-redux'
import articleComponent from '../components/articleComponent'
import {selectNews} from '../actions/index'

function mapStateToProps (state) {
  return {
    newsDetail: state.NYTimes.newsDetail ? state.NYTimes.newsDetail : {},
    newsType: state.NYTimes.newsType ?  state.NYTimes.newsType : 'top'
  }
}
function mapDispatchToProps (dispatch) {
  return {
    selectNews: (news)=>{ dispatch(selectNews(news))}
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps
)(articleComponent)
