import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  authRedirectPath: '/',
  homeFeatureData: [],
  homeTrendeing: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOME_FEATURED_IS_LOADING:
      return {
        ...state,
        error: false,
        loading: true
      };
    case actionTypes.HOME_FEATURED_LOAD_FAILED:
      return {
        ...state,
        error: action.homeFeaturedLoadFailed,
        loading: false
      };
    case actionTypes.HOME_FEATURED_LOAD_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        homeFeatureData: action.homeFeaturedData
      };
    case actionTypes.HOME_TRENDING_IS_LOADING:
      return {
        ...state,
        error: false,
        loading: true
      };
    case actionTypes.HOME_TRENDING_LOAD_FAILED:
      return {
        ...state,
        error: action.homeTrendingLoadFailed,
        loading: false
      };
    case actionTypes.HOME_TRENDING_LOAD_SUCCESS:
      return {
        ...state,
        error: action.homeTrendingLoadFailed,
        loading: false,
        homeTrendingData: action.homeTrendingData
      };

    default:
      return state;
  }
};

export default reducer;

// export function homeFeaturedIsLoading ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_FEATURED_IS_LOADING:
// 		return action.homeFeaturedIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function homeFeaturedLoadFailed ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_FEATURED_LOAD_FAILED:
// 		return action.homeFeaturedLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function homeFeaturedData ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_FEATURED_LOAD_SUCCESS:
// 		return action.homeFeaturedData;

// 	default:
// 		return state;
//     }
// }

// export function homeTrendingIsLoading ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_TRENDING_IS_LOADING:
// 		return action.homeTrendingIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function homeTrendingLoadFailed ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_TRENDING_LOAD_FAILED:
// 		return action.homeTrendingLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function homeTrendingData ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_TRENDING_LOAD_SUCCESS:
// 		return action.homeTrendingData;

// 	default:
// 		return state;
//     }
// }
