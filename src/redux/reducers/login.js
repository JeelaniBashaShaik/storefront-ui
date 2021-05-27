import { LOGIN, LOGOUT, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAIL, USER_VERIFIED } from '../types/login';

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
  canNavigateToWelcome: false
};

export const LoginReducer = (state = initialState, action) => {
  console.log(action, 'inside reducer')
  switch (action.type) {
    case LOGIN: {
        return {
            ...state,
            isLoggedIn: true,
            userName: action.payload.name,
            userEmail: action.payload.email,
            userImage: action.payload.imageUrl
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
      return {
        ...state,
        userRole: action.payload.userRole
      }
    }
    default: {
      return state;
    }
  }
};
