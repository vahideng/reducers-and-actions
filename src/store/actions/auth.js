import axios from 'axios';

import * as actionTypes from './actionTypes';
import { BASE_URL } from '../../config';


// LOGIN
export function userIsLoggingIn(bool) {
  return {
    type: actionTypes.USER_IS_LOGGING_IN
  };
}

export function userLoginFailed(error) {
  return {
    type: actionTypes.USER_LOGIN_FAILED,
    error: error
  };
}

export function userLoginSuccess(token, userId) {
  return {
    type: actionTypes.USER_LOGIN_SUCCESS,
    tokenId: token,
    userId: userId
  };
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT // need to define
  };
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
      .post(url, authData)
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
      .post(url, authVerifyTac)
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
      .post(url, resendTacData)
      .then(response => {
        dispatch(userResendTACSuccess(response.status));
      })
      .catch(error => {
        dispatch(userVerifyFailed(error.message));
      });
  };
};

// export function userLogin(body) {
//     return dispatch => {
//       dispatch(userIsLoggingIn(true));
//       return getCSRFToken()
//         .then(token => {
//           body['_token'] = token;

//           var _link = BASE_URL + 'login';
//           return fetch(_link, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//             },
//             body: urlEncodeBody(body)
//           });
//         })
//         .then(response => {
//           if (!response.ok) throw Error(response.statusText);

//           dispatch(userIsLoggingIn(false));
//           return response;
//         })
//         .then(response => response.json())
//         .then(data => {
//           console.log('LOGIN', data);
//           if (data.status === 'success') dispatch(userLoginSuccess(true));
//           else dispatch(userLoginFailed(data.message));
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     };
//   }

// export function userVerifyTAC(body) {
//     return dispatch => {
//       dispatch(userIsVerifying(true));
//       return getCSRFToken()
//         .then(token => {
//           body['_token'] = token;

//           var _link = BASE_URL + 'verify-tac';
//           return fetch(_link, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//             },
//             body: urlEncodeBody(body)
//           });
//         })
//         .then(response => {
//           if (!response.ok) throw Error(response.statusText);

//           dispatch(userIsVerifying(false));
//           return response;
//         })
//         .then(response => response.json())
//         .then(data => {
//           console.log('VERIFY-TAC', data);
//           if (data.status === 'success') dispatch(userVerifySuccess(true));
//           else dispatch(userVerifyFailed(data.message));
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     };
//   }

// export function userResendTAC(body) {
//     return dispatch => {
//       dispatch(userIsVerifying(true));
//       return getCSRFToken()
//         .then(token => {
//           body['_token'] = token;

//           var _link = BASE_URL + 'resend-tac';
//           return fetch(_link, {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//             },
//             body: urlEncodeBody(body)
//           });
//         })
//         .then(response => {
//           if (!response.ok) throw Error(response.statusText);

//           dispatch(userIsVerifying(false));
//           return response;
//         })
//         .then(response => response.json())
//         .then(data => {
//           console.log('RESEND-TAC', data);
//           if (data.status === 'success') dispatch(userResendTACSuccess(true));
//           else dispatch(userVerifyFailed(data.message));
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     };
//   }
