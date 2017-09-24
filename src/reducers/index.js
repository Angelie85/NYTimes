import { combineReducers } from 'redux'
import { FETCH_TOP_STORIES, FETCH_SEARCH_RESULT, SET_PAGE_COUNT, SET_SEARCH_KEYWORD, SELECT_NEWS} from './../actions'

const init_state = {
  newsList: [],
  page: 0,
  searchKeyword: '',
  newsDetail:{}

}

const getPageNumber =(totalSearchResult)=>{
  let totalPage = parseInt(totalSearchResult/10,10)
  totalPage = totalSearchResult%10>0?totalPage+1:totalPage
  return totalPage
}

const NYTimes = (state = init_state, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULT:
      return Object.assign({}, state, {newsList: action.payload? action.payload.data:[], totalPage : getPageNumber(action.payload?action.payload.data.response.meta.hits:1)});
    case FETCH_TOP_STORIES:
      return Object.assign({}, state, {topList: action.payload? action.payload.data: {}});
    case SET_PAGE_COUNT:
      return Object.assign({}, state, {page: action.payload});
    case SET_SEARCH_KEYWORD:
      return Object.assign({}, state, {searchKeyword: action.payload});
    case SELECT_NEWS:
      return Object.assign({}, state, {newsDetail: action.payload, newsType:action.newsType});
    default:
      return state
  }
};

const mainReducer = combineReducers({
  NYTimes
});

export default mainReducer
