import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: '/',
  register : false,
  login : false,
  verified: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_IS_LOGGING_IN:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.USER_LOGIN_FAILED:
      return {
        ...state,
        error: action.userLoginFailed,
        loading: false
      };
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
        login: true
      };
    case actionTypes.USER_IS_VERIFYING:
      return {
        ...state,
        error: null,
        loading: true
      };

    case actionTypes.USER_VERIFY_FAILED:
      return {
        ...state,
        error: action.userVerifyFailed,
        loading: false
      };

    case actionTypes.USER_VERIFY_SUCCESS:
      return {
        ...state,
        error: action.userVerifySuccess,
        loading: false,
        verified: true
      };
    case actionTypes.USER_RESEND_TAC_SUCCESS:
      return {
        ...state,
        loading: false,
        tac: action.userResendTACSuccess
      };

    case actionTypes.USER_IS_REGISTERING:
      return {
        ...state,
        loading: false
        // action.userIsRegistering
      };
    case actionTypes.USER_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.userRegisterFailed
        //  action.userRegisterFailed
      };

    case actionTypes.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        register : true
        //  action.userRegisterFailed
      };

    default:
      return state;
  }
};

export default reducer;

// export function userIsRegistering ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case USER_IS_REGISTERING:
// 		return action.userIsRegistering;

// 	default:
// 		return state;
//     }
// }

// export function userRegisterFailed ( state = null, action )
// {
// 	switch ( action.type )
// 	{
// 	case USER_REGISTER_FAILED:
// 		return action.userRegisterFailed;

// 	default:
// 		return state;
//     }
// }

// export function userRegisterSuccess ( state = false, action )
// {
// 	switch ( action.type )
// 	{
// 	case USER_REGISTER_SUCCESS:
// 		return action.userRegisterSuccess;

// 	default:
// 		return state;
//     }
// }

// export function userIsLoggingIn(state = false, action) {
//   switch (action.type) {
//     case actionTypes.USER_IS_LOGGING_IN :
//       return action.userIsLoggingIn;

//     default:
//       return state;
//   }
// }

// export function userLoginFailed(state = null, action) {
//   switch (action.type) {
//     case USER_LOGIN_FAILED:
//       return action.userLoginFailed;

//     default:
//       return state;
//   }
// }

// export function userLoginSuccess(state = false, action) {
//   switch (action.type) {
//     case USER_LOGIN_SUCCESS:
//       return action.userLoginSuccess;

//     default:
//       return state;
//   }
// }

// VERIFY
// export function userIsVerifying(state = false, action) {
//   switch (action.type) {
//     case USER_IS_VERIFYING:
//       return action.userIsVerifying;

//     default:
//       return state;
//   }
// }

// export function userVerifyFailed(state = null, action) {
//   switch (action.type) {
//     case USER_VERIFY_FAILED:
//       return action.userVerifyFailed;

//     default:
//       return state;
//   }
// }

// export function userVerifySuccess(state = false, action) {
//   switch (action.type) {
//     case USER_VERIFY_SUCCESS:
//       return action.userVerifySuccess;

//     default:
//       return state;
//   }
// }

// export function userResendTACSuccess(state = false, action) {
//   switch (action.type) {
//     case USER_RESEND_TAC_SUCCESS:
//       return action.userResendTACSuccess;

//     default:
//       return state;
//   }
// }
