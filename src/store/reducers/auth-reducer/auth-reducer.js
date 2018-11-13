export function userIsLoggingIn(state = false, action) {
  switch (action.type) {
    case USER_IS_LOGGING_IN:
      return action.userIsLoggingIn;

    default:
      return state;
  }
}

export function userLoginFailed(state = null, action) {
  switch (action.type) {
    case USER_LOGIN_FAILED:
      return action.userLoginFailed;

    default:
      return state;
  }
}

export function userLoginSuccess(state = false, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return action.userLoginSuccess;

    default:
      return state;
  }
}

// VERIFY
export function userIsVerifying(state = false, action) {
  switch (action.type) {
    case USER_IS_VERIFYING:
      return action.userIsVerifying;

    default:
      return state;
  }
}

export function userVerifyFailed(state = null, action) {
  switch (action.type) {
    case USER_VERIFY_FAILED:
      return action.userVerifyFailed;

    default:
      return state;
  }
}

export function userVerifySuccess(state = false, action) {
  switch (action.type) {
    case USER_VERIFY_SUCCESS:
      return action.userVerifySuccess;

    default:
      return state;
  }
}

export function userResendTACSuccess(state = false, action) {
  switch (action.type) {
    case USER_RESEND_TAC_SUCCESS:
      return action.userResendTACSuccess;

    default:
      return state;
  }
}
