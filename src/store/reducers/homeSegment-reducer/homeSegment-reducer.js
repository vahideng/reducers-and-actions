import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  authRedirectPath: '/',
  homeSegmentData1: [],
  homeSegmentData2: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOME_SEGMENT_1_IS_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };
    case actionTypes.HOME_SEGMENT_1_LOAD_FAILED:
      return {
        ...state,
        error: action.homeSegmentLoadFailed_1,
        loading: false
      };
    case actionTypes.HOME_SEGMENT_1_LOAD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        homeSegmentData1: action.homeSegmentData_1
      };
    case actionTypes.HOME_SEGMENT_2_IS_LOADING:
      return {
        ...state,
        loading: true,
        error: false
      };
    case actionTypes.HOME_SEGMENT_2_LOAD_FAILED:
      return {
        ...state,
        error: action.homeSegmentLoadFailed_2,
        loading: false
      };
    case actionTypes.HOME_SEGMENT_2_LOAD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        homeSegmentData2: action.homeSegmentData_1
      };

    default:
      return state;
  }
};

export default reducer;

// export function homeSegmentIsLoading_1 ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_SEGMENT_1_IS_LOADING:
// 		return action.homeSegmentIsLoading_1;

// 	default:
// 		return state;
//     }
// }

// export function homeSegmentLoadFailed_1 ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_SEGMENT_1_LOAD_FAILED:
// 		return action.homeSegmentLoadFailed_1;

// 	default:
// 		return state;
//     }
// }

// export function homeSegmentData_1 ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_SEGMENT_1_LOAD_SUCCESS:
// 		return action.homeSegmentData_1;

// 	default:
// 		return state;
//     }
// }

// export function homeSegmentIsLoading_2 ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_SEGMENT_2_IS_LOADING:
// 		return action.homeSegmentIsLoading_2;

// 	default:
// 		return state;
//     }
// }

// export function homeSegmentLoadFailed_2 ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_SEGMENT_2_LOAD_FAILED:
// 		return action.homeSegmentLoadFailed_2;

// 	default:
// 		return state;
//     }
// }

// export function homeSegmentData_2 ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case HOME_SEGMENT_2_LOAD_SUCCESS:
// 		return action.homeSegmentData_2;

// 	default:
// 		return state;
//     }
// }
