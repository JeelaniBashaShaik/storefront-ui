import { LOGIN, LOGOUT, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAIL, USER_VERIFIED, API_START, LOGIN_FAILED, SIGNUP_FAILED } from '../types/login';

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
  showLoginError: false,
  errorMessage: ''
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
      const { userRole, userEmail, userName, userAddress, userPrimaryNumber, userSecondaryNumber } = action.payload;
      return {
        ...state,
        userRole,
        userEmail,
        userName,
        userAddress,
        userPrimaryNumber,
        userSecondaryNumber,
        isLoggedIn: true,
        isApiCall: false
      }
    }
    case LOGIN_FAILED: {
      console.log('login failed', action.payload)
      return {
        ...state,
        isApiCall: false,
        showLoginError: true,
        errorMessage: action.payload
      }
    }
    case SIGNUP_FAILED: {
      return {
        ...state,
        isApiCall: false,
        showSignUpError: true,
        errorMessage: action.payload
      }
    }
    case API_START: {
      return {
        ...state,
        isApiCall: true
      }
    }
    default: {
      return state;
    }
  }
};
