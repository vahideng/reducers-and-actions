import * as actionTypes from './actionTypes';


import { BASE_API_URL } from '../../config';
import { fetchDefault } from '../../helper/helper';

export const categoryListLoadFailed =( message )=>
{
	return {
		type: actionTypes.CATEGORY_LIST_LOAD_FAILED,
		categoryListLoadFailed: message
	}
}

export const categoryList= ( data ) =>
{
	return {
		type: actionTypes.CATEGORY_LIST_LOADED,
		categoryList: data
	}
}

export function loadCategoryList () 
{
	var _link = BASE_API_URL + 'categories';
	return fetchDefault ( _link, null, categoryListLoadFailed, categoryList ); //what is this about!!
}