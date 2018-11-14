import axios from 'axios';

import * as actionTypes from './actionTypes';
import { BASE_URL } from '../../config';

// LOGIN.
export const userIsLoggingIn = () => {
  return {
    type: actionTypes.USER_IS_LOGGING_IN
  };
};

export const userLoginFailed = error => {
  return {
    type: actionTypes.USER_LOGIN_FAILED,
    error: error
  };
};

export const userLoginSuccess = (token, userId) => {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    tokenId: token,
    userId: userId
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT // need to define
  };
};

const config = {
  //configuration for axios
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};
export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(userIsLoggingIn());
    const authData = {
      email: email,
      password: password,
      retuenSequreToken: true
    };
    let url = `${BASE_URL}login`;
    if (!isSignup) {
      //////  url = "something else"
    }

    axios
      .post(url, authData, config)
      .then(response => {
        const expirationDate = new Date(
          new Date().getTime() + response.data.expiresIn * 1000 // to get expire time of token
        );
        localStorage.setItem('token', response.data.tokenId);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.loaclId);
        dispatch(userLoginSuccess(response.data.tokenId, response.data.userId));
      })
      .catch(err => {
        dispatch(userLoginFailed(err.response.data.message));
      });
  };
};

// VERIFY

export const userIsVerifying = () => {
  return {
    type: actionTypes.USER_IS_VERIFYING
  };
};

export const userVerifyFailed = error => {
  return {
    type: actionTypes.USER_VERIFY_FAILED,
    error: error
  };
};

export const userVerifySuccess = status => {
  return {
    type: actionTypes.USER_VERIFY_SUCCESS,
    status: status
  };
};

export const userResendTACSuccess = status => {
  return {
    type: actionTypes.USER_RESEND_TAC_SUCCESS,
    userResendTACSuccess: status
  };
};

export const userVerifyTAC = (msisdn, tac, isRegister, token) => {
  return dispatch => {
    dispatch(userIsVerifying());
    const authVerifyTac = {
      msisdn: msisdn,
      tac: tac,
      isRegister: isRegister,
      token: token
    };
    let url = `${BASE_URL}verify-tac`;
    axios
      .post(url, authVerifyTac, config)
      .then(response => {
        dispatch(userVerifySuccess(response.status));
      })
      .catch(error => {
        dispatch(userLoginFailed(error.message));
      });
  };
};

export const userResendTAC = (msisdn, token) => {
  return dispatch => {
    dispatch(userIsVerifying());
    const resendTacData = {
      msisdn,
      token
    };

    let url = `${BASE_URL}resend-tac`;
    axios
      .post(url, resendTacData, config)
      .then(response => {
        dispatch(userResendTACSuccess(response.status));
      })
      .catch(error => {
        dispatch(userVerifyFailed(error.message));
      });
  };
};

/////////Registering --
export const userIsRegistering = () => {
  return {
    type: actionTypes.USER_IS_REGISTERING
  };
};

export const userRegisterFailed = error => {
  return {
    type: actionTypes.USER_REGISTER_FAILED,
    error: error
  };
};

export const userRegisterSuccess = status => {
  return {
    type: actionTypes.USER_REGISTER_SUCCESS,
    status: status
  };
};

export const userRegister = (name, email, msisdn, token) => {
  return dispatch => {
    dispatch(userIsRegistering());
    const userRegisteData = {
      name,
      email,
      msisdn,
      token
    };
    let url = `${BASE_URL}register`;
    axios
      .post(url, userRegisteData, config)
      .then(response => {
        dispatch(userRegisterSuccess(response.status));
      })
      .catch(error => {
        dispatch(userRegisterFailed(error.message));
      });
  };
};
