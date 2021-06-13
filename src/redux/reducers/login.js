import { LOGIN, LOGOUT, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAIL, USER_VERIFIED, API_START, LOGIN_FAILED, SIGNUP_FAILED, SIGNUP_SUCCESS, RESET_SNACK_MESSAGE } from '../types/login';

const initialState = {
  isLoggedIn: false,
  userName: '',
  userEmail: '',
  userImage: '',
  userRole: '',
  userPrimaryNumber: '',
  userSecondaryNumber: '',
  userAddress: '',
  userAcessToken: {},
  canNavigateToWelcome: false,
  showSnackBar: false,
  signUpMessage: '',
  signUpSuccess: false
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
        return {
            ...state,
            isLoggedIn: true,
            userName: action.payload.name,
            userEmail: action.payload.email,
            userImage: action.payload.imageUrl,
            isApiCall: false
        }; 
    }
    case LOGOUT: {
        return {
          ...initialState
        }; 
    }
    case SAVE_PROFILE_SUCCESS: {
        return {
          ...state,
          ...action.payload,
          canNavigateToWelcome: true
        };
    }
    case SAVE_PROFILE_FAIL: {
      return {
        ...state,
        canNavigateToWelcome: false
      };
    }
    case USER_VERIFIED: {
      const { userRole, userEmail, userName, userPrimaryNumber, token } = action.payload;
      return {
        ...state,
        userRole,
        userEmail,
        userName,
        userPrimaryNumber,
        isLoggedIn: true,
        isApiCall: false,
        token
      }
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        isApiCall: false,
        loginMessage: action.payload
      }
    }
    case SIGNUP_FAILED: {
      return {
        ...state,
        isApiCall: false,
        signUpMessage: action.payload,
        showSnackBar: true,
        signUpSuccess: false
      }
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        isApiCall: false,
        signUpMessage: 'Sign-up success, you can login now !!!',
        showSnackBar: true,
        signUpSuccess: true
      }
    }
    case API_START: {
      return {
        ...state,
        isApiCall: true
      }
    }
    case RESET_SNACK_MESSAGE: {
      return {
        ...state,
        signUpMessage: '',
        loginMessage: ''
      }
    }
    default: {
      return state;
    }
  }
};
