import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  authRedirectPath: '/',
  category: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY_LIST_LOAD_FAILED:
      return {
        ...state,
        error: action.categoryListLoadFailed,
        loading: false
      };
    case actionTypes.CATEGORY_LIST_LOADED:
      return {
        ...state,
        error: false,
        loading: false,
        category: action.categoryList
      };

    default:
      return state;
  }
};

export default reducer;

// export function categoryListLoadFailed ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case CATEGORY_LIST_LOAD_FAILED:
// 		return action.categoryListLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function categoryList ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case CATEGORY_LIST_LOADED:
// 		return action.categoryList;

// 	default:
// 		return state;
//     }
// }
