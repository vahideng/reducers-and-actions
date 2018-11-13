import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  products: [],
  profile: {},
  subscription: [],
  error: null,
  loading: false,
  authRedirectPath: '/'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DASH_SUBS_IS_LOADING:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.DASH_SUBS_LOAD_FAILED:
      return {
        ...state,
        error: action.userLoginFailed,
        loading: false
      };
    case actionTypes.DASH_SUBS_LOAD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false
      };
    case actionTypes.DASH_RECOM_IS_LOADING:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.DASH_RECOM_LOAD_FAILED:
      return {
        ...state,
        error: action.dashRecomLoadFailed,
        loading: true
      };
    case actionTypes.DASH_RECOM_LOAD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        products: action.dashRecomData
      };
    case actionTypes.PROFILE_IS_LOADING:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.PROFILE_LOAD_FAILED:
      return {
        ...state,
        error: action.profileLoadFailed,
        loading: false
      };

    case actionTypes.PROFILE_LOAD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        profile: action.profileData
      };
    case actionTypes.SUBSCRIPTION_IS_LOADING:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.SUBSCRIPTION_LOAD_FAILED:
      return {
        ...state,
        error: action.subscriptionLoadFailed,
        loading: false
      };
    case actionTypes.SUBSCRIPTION_LOAD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        subscription: action.subscriptionData
      };
    case actionTypes.UNSUBSCRIBE_IS_LOADING:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.UNSUBSCRIBE_LOAD_FAILED:
      return {
        ...state,
        error: action.unsubscribeError,
        loading: false
      };
    case actionTypes.UNSUBSCRIBE_LOAD_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        subscription: action.subscriptionData // use filter
      };
    default:
      return state;
  }
};

export default reducer;

// export function dashRecomData ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case DASH_RECOM_LOAD_SUCCESS:
// 		return action.dashRecomData;

// 	default:
// 		return state;
//     }
// }

// export function dashSubsIsLoading ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case DASH_SUBS_IS_LOADING:
// 		return action.dashSubsIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function dashSubsLoadFailed ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case DASH_SUBS_LOAD_FAILED:
// 		return action.dashSubsLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function dashSubsData ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case DASH_SUBS_LOAD_SUCCESS:
// 		return action.dashSubsData;

// 	default:
// 		return state;
//     }
// }
// export function dashRecomIsLoading ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case DASH_RECOM_IS_LOADING:
// 		return action.dashRecomIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function dashRecomLoadFailed ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case DASH_RECOM_LOAD_FAILED:
// 		return action.dashRecomLoadFailed;

// 	default:
// 		return state;
//     }
// }
// export function profileIsLoading ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case PROFILE_IS_LOADING:
// 		return action.profileIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function profileLoadFailed ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case PROFILE_LOAD_FAILED:
// 		return action.profileLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function profileData ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case PROFILE_LOAD_SUCCESS:
// 		return action.profileData;

// 	default:
// 		return state;
//     }
// }

// export function subscriptionIsLoading ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case SUBSCRIPTION_IS_LOADING:
// 		return action.subscriptionIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function subscriptionLoadFailed ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case SUBSCRIPTION_LOAD_FAILED:
// 		return action.subscriptionLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function subscriptionData(state = null, action) {
//   switch (action.type) {
//     case SUBSCRIPTION_LOAD_SUCCESS:
//       return action.subscriptionData;

//     default:
//       return state;
//   }
// }

// export function unsubscribeIsLoading ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case UNSUBSCRIBE_CLEAR_STATE:
// 		return false;

// 	case UNSUBSCRIBE_IS_LOADING:
// 		return action.unsubscribeIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function unsubscribeLoadFailed ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case UNSUBSCRIBE_CLEAR_STATE:
// 		return false;

// 	case UNSUBSCRIBE_LOAD_FAILED:
// 		return action.unsubscribeLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function unsubscribeLoadSuccess ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case UNSUBSCRIBE_CLEAR_STATE:
// 		return false;

// 	case UNSUBSCRIBE_LOAD_SUCCESS:
// 		return action.unsubscribeLoadSuccess;

// 	default:
// 		return state;
//     }
// }
