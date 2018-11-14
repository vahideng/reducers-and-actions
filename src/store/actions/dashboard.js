import axios from 'axios';

import * as actionTypes from './actionTypes';

import { BASE_API_URL } from '../../config';

export const dashRecomIsLoading = () => {
  return {
    type: actionTypes.DASH_RECOM_IS_LOADING
  };
};

export const dashRecomLoadFailed = error => {
  return {
    type: actionTypes.DASH_RECOM_LOAD_FAILED,
    error
  };
};

export const dashRecomLoadSuccess = data => {
  return {
    type: actionTypes.DASH_RECOM_LOAD_SUCCESS,
    data
  };
};

export const loadDashRecom = () => {
  return dispatch => {
    dispatch(dashRecomIsLoading());
    let url = `${BASE_API_URL}/dashboard-recommendations`;
    axios
      .get(url)
      .then(response => {
        dispatch(dashRecomIsLoading(response.json()));
      })
      .catch(error => {
        dispatch(dashRecomLoadFailed(error.message));
      });
  };
};

///////// dushSubs action creators

export const dashSubsIsLoading = () => {
  return {
    type: actionTypes.DASH_SUBS_IS_LOADING
  };
};

export const dashSubsLoadFailed = () => {
  return {
    type: actionTypes.DASH_SUBS_LOAD_FAILED
  };
};

export const dashSubsLoadSuccess = data => {
  return {
    type: actionTypes.DASH_SUBS_LOAD_SUCCESS,
    dashSubsData: data
  };
};

export const loadDashSubs = () => {
  //data needed to pass??
  let url = `${BASE_API_URL}/dashboard-subscriptions`;
  return dispatch => {
    dispatch(dashSubsIsLoading());

    axios
      .get(url)
      .then(response => {
        dispatch(dashSubsLoadSuccess(response.json()));
      })
      .catch(error => {
        dispatch(dashSubsLoadFailed(error.message));
      });
  };
};

//Profile action creators--

export const profileIsLoading = () => {
  return {
    type: actionTypes.PROFILE_IS_LOADING
  };
};

export const profileLoadFailed = error => {
  return {
    type: actionTypes.PROFILE_LOAD_FAILED,
    error
  };
};

export const profileLoadSuccess = data => {
  return {
    type: actionTypes.PROFILE_LOAD_SUCCESS,
    profileData: data
  };
};

export const loadProfile = () => {
  let url = `${BASE_API_URL}/profile`;
  return dispatch => {
    dispatch(profileIsLoading());

    axios
      .get(url)
      .then(response => {
        dispatch(profileLoadSuccess(response.json()));
      })
      .catch(error => {
        dispatch(profileLoadFailed(error.message));
      });
  };
};
////////

//subscription action creatrs--

export const subscriptionIsLoading = () => {
  return {
    type: actionTypes.SUBSCRIPTION_IS_LOADING
  };
};

export const subscriptionLoadFailed = error => {
  return {
    type: actionTypes.SUBSCRIPTION_LOAD_FAILED,
    error
  };
};

export const subscriptionLoadSuccess = subscriptionData => {
  return {
    type: actionTypes.SUBSCRIPTION_LOAD_SUCCESS,
    subscriptionData
  };
};

export const loadSubscription = _subsId => {
  let url = `${BASE_API_URL}subscription/${_subsId}`;
  return dispatch => {
    dispatch(subscriptionIsLoading());
    axios
      .get(url)
      .then(response => {
        dispatch(subscriptionLoadSuccess(response.json()));
      })
      .catch(error => {
        dispatch(subscriptionLoadFailed(error.message));
      });
  };
};

////
//unsubscribe action creators --

export const unsubscribeIsLoading = () => {
  return {
    type: actionTypes.UNSUBSCRIBE_IS_LOADING
  };
};

export const unsubscribeLoadFailed = error => {
  return {
    type: actionTypes.UNSUBSCRIBE_LOAD_FAILED,
    error
  };
};

export const unsubscribeLoadSuccess = data => {
  return {
    type: actionTypes.UNSUBSCRIBE_LOAD_SUCCESS,
    data
  };
};

export function unsubscribeClearState() {
  return {
    type: actionTypes.UNSUBSCRIBE_CLEAR_STATE
  };
}

export const unsubscribe = (_subsId, tokenId) => {
  return dispatch => {
    dispatch(unsubscribeClearState());
    dispatch(unsubscribeIsLoading());
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        _token: `Bearer${tokenId}`
      }
    };
    let url = `${BASE_API_URL}terminate/${_subsId}`;
    axios
      .post(url, _subsId, config)
      .then(response => {
        dispatch(unsubscribeLoadSuccess(response.data));
      })
      .catch(error => {
        dispatch(unsubscribeLoadFailed(error.message));
      });
  };
};

export const clearUnsubscribe = () => {
  console.log('clear unsubscribe');
  return dispatch => {
    dispatch(unsubscribeClearState());
  };
};

