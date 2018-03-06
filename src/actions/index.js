import axios from 'axios'

export const SET_SEARCH_KEYWORD = 'SET_SEARCH_KEYWORD';
export const SET_PAGE_COUNT = 'SET_PAGE_COUNT';
export const FETCH_TOP_STORIES_SUCCESS = 'FETCH_TOP_STORIES_SUCCESS';
export const FETCH_TOP_STORIES_FAIL = 'FETCH_TOP_STORIES_FAIL';
export const FETCH_SEARCH_RESULT_SUCCESS = 'FETCH_SEARCH_RESULT_SUCCESS';
export const FETCH_SEARCH_RESULT_FAIL = 'FETCH_SEARCH_RESULT_FAIL';
export const SELECT_NEWS = 'SELECT_NEWS';

export const setPageCount = (page) => { return {type: SET_PAGE_COUNT, payload: page} };
export const setSearchKeyword = (keyword) => { return {type: SET_SEARCH_KEYWORD, payload: keyword} };
export const selectNews = (news,type) => {return{type:SELECT_NEWS, payload: news, newsType: type}};

const API = '3f1f7f6973744c09b710a675f13068eb';
const timesURL = 'https://api.nytimes.com';
let todayDate = new Date();

const dateToYYYYMMDD = (thisDate)=>{
  let year = thisDate.getFullYear().toString();
  let month = thisDate.getMonth()+1;
  month = month.toString().length===1?'0'+month.toString():month.toString();
  let date = thisDate.getDate();
  date = date.toString().length===1? '0'+date.toString():date.toString();
  return year+month+date;
};

todayDate = dateToYYYYMMDD(todayDate);

let sevenDaysAgo = new Date();
sevenDaysAgo.setDate(sevenDaysAgo.getDate()-7);
sevenDaysAgo = dateToYYYYMMDD(sevenDaysAgo);

export const fetchSearchResultSuccess = (response)=>({type: FETCH_SEARCH_RESULT_SUCCESS, response})
export const fetchSearchResultFail = (response)=>({type: FETCH_SEARCH_RESULT_FAIL, response})


export const fetchSearchResult = (keyword, page) => {
  return dispatch => {
    const TIMES_SEARCH_API = `${timesURL}/svc/search/v2/articlesearch.json`
    const params={params:{
      'api-key':API,
      sort: 'newest',
      hl:true,
      q:keyword||'',
      page:page === undefined ? 0 : page
      }
    }
    return axios.get(TIMES_SEARCH_API, params)
      .then(response => {
        if (response.data.status === 'OK') {
          dispatch(fetchSearchResultSuccess(response))
        }else{
          dispatch(fetchSearchResultFail(response))
        }
      })
  }
};

export const fetchTopStoriesSuccess = (response)=>({type: FETCH_TOP_STORIES_SUCCESS, response})
export const fetchTopStoriesFail = (response)=>({type: FETCH_TOP_STORIES_FAIL, response})

export const fetchTopStories = (keyword, page) => {
  return dispatch => {
    const TIMES_TOP_STORIES_API = `${timesURL}/svc/topstories/v2/home.json`
    let params={params:{
      'api-key':API,
      hl:true,
      begin_date:sevenDaysAgo,
      end_date:todayDate,
      sort:'newest',
      page: page === undefined ? 0 : page}
    }
    return axios.get(TIMES_TOP_STORIES_API, params)
      .then(response=>{
        if(response.data.status==="OK"){
          dispatch(fetchTopStoriesSuccess(response))
        }else{
          dispatch(fetchTopStoriesFail(response))
        }
    })
  }

};
