import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  authRedirectPath: '/',
  searchedData: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_IS_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.SEARCH_LOAD_FAILED:
      return {
        ...state,
        error: action.searchLoadFailed,
        loading: false
      };
    case actionTypes.SEARCH_LOADED:
      return {
        ...state,
        error: null,
        loading: false,
        searchedData: action.searchData
      };

    default:
      return state;
  }
};

export default reducer;

// export function searchIsLoading ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case SEARCH_IS_LOADING:
// 		return action.searchIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function searchLoadFailed ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case SEARCH_LOAD_FAILED:
// 		return action.searchLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function searchData ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case SEARCH_LOADED:
// 		return action.searchData;

// 	default:
// 		return state;
//     }
// }
