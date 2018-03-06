import { combineReducers } from 'redux'
import * as actions from './../actions'

const init_state = {
  newsList: [],
  worldList:[],
  topList:[],
  usList:[],
  page: 0,
  searchKeyword: '',
  newsDetail:{},
  error:{}
}

const getPageNumber =(totalSearchResult)=>{
  let totalPage = parseInt(totalSearchResult/10,10)
  totalPage = totalSearchResult%10>0?totalPage+1:totalPage
  return totalPage
}

const NYTimes = (state = init_state, action) => {
  switch (action.type) {
    case actions.FETCH_SEARCH_RESULT_SUCCESS:
      return {
        ...state,
        newsList: action.response? action.response.data:[],
        totalPage: getPageNumber(action.response?action.response.data.response.meta.hits:1)
      }
    case actions.FETCH_SEARCH_RESULT_FAIL:
      return{...state,error: action.response }
    case actions.FETCH_TOP_STORIES_SUCCESS:
      return {...state,topList:action.response?action.response.data:{}}
    case actions.FETCH_TOP_STORIES_FAIL:
      return {...state,error:action.response}
    case actions.FETCH_WORLD_SUCCESS:
    return{...state, worldList:action.response?action.response.data:{}}
    case actions.FETCH_WORLD_FAIL:
      return {...state, error:action.response}
    case actions.FETCH_NATIONAL_SUCCESS:
      return{...state, usList:action.response?action.response.data:{}}
    case actions.FETCH_NATIONAL_FAIL:
      return{...state, error:action.response}
    case actions.SET_PAGE_COUNT:
      return Object.assign({}, state, {page: action.payload});
    case actions.SET_SEARCH_KEYWORD:
      return Object.assign({}, state, {searchKeyword: action.payload});
    case actions.SELECT_NEWS:
      return Object.assign({}, state, {newsDetail: action.payload, newsType:action.newsType});
    default:
      return state
  }
};

const mainReducer = combineReducers({
  NYTimes
});

export default mainReducer
