import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  error: null,
  loading: false,
  authRedirectPath: '/',
  popularProducts: [],
  trendeingProducts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCTS_POPULAR_IS_LOADING:
      return {
        ...state,
        error: false,
        loading: true
      };
    case actionTypes.PRODUCTS_POPULAR_LOAD_FAILED:
      return {
        ...state,
        error: action.productsPopularLoadFailed,
        loading: false
      };
    case actionTypes.PRODUCTS_POPULAR_LOAD_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        popularProducts: action.productsPopularData
      };
    case actionTypes.PRODUCTS_TRENDING_IS_LOADING:
      return {
        ...state,
        error: false,
        loading: true
      };
    case actionTypes.PRODUCTS_TRENDING_LOAD_FAILED:
      return {
        ...state,
        error: action.productsTrendingLoadFailed,
        loading: false
      };
    case actionTypes.PRODUCTS_TRENDING_LOAD_SUCCESS:
      return {
        ...state,
        error: action.homeTrendingLoadFailed,
        loading: false,
        trendeingProducts:action.productsTrendingData
      };

    default:
      return state;
  }
};

export default reducer;





// export function productsPopularIsLoading ( state = false, action ) 
// {
// 	switch ( action.type ) 
// 	{
// 	case PRODUCTS_POPULAR_IS_LOADING:
// 		return action.productsPopularIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function productsPopularLoadFailed ( state = false, action ) 
// {
// 	switch ( action.type ) 
// 	{
// 	case PRODUCTS_POPULAR_LOAD_FAILED:
// 		return action.productsPopularLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function productsPopularData ( state = null, action ) 
// {
// 	switch ( action.type ) 
// 	{
// 	case PRODUCTS_POPULAR_LOAD_SUCCESS:
// 		return action.productsPopularData;

// 	default:
// 		return state;
//     }
// }

// export function productsTrendingIsLoading ( state = false, action ) 
// {
// 	switch ( action.type ) 
// 	{
// 	case PRODUCTS_TRENDING_IS_LOADING:
// 		return action.productsTrendingIsLoading;

// 	default:
// 		return state;
//     }
// }

// export function productsTrendingLoadFailed ( state = false, action ) 
// {
// 	switch ( action.type ) 
// 	{
// 	case PRODUCTS_TRENDING_LOAD_FAILED:
// 		return action.productsTrendingLoadFailed;

// 	default:
// 		return state;
//     }
// }

// export function productsTrendingData ( state = null, action ) 
// {
// 	switch ( action.type ) 
// 	{
// 	case PRODUCTS_TRENDING_LOAD_SUCCESS:
// 		return action.productsTrendingData;

// 	default:
// 		return state;
//     }
// }