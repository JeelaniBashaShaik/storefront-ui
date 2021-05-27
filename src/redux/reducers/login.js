import { LOGIN, LOGOUT, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAIL } from '../types/login';

const initialState = {
  isLoggedIn: false,
  userName: '',
  userEmail: '',
  userImage: '',
  userPrimaryNumber: '',
  userSecondaryNumber: '',
  userAddress: '',
  userAcessToken: {},
  canNavigateToWelcome: false
};

export const LoginReducer = (state = initialState, action) => {
  console.log(action, 'action in loginReducer')
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
    default: {
      return state;
    }
  }
};
