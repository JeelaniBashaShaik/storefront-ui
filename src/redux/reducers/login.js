import { LOGIN, LOGOUT } from '../types/login';

const initialState = {
  isLoggedIn: false,
  userName: '',
  userEmail: '',
  userImage: '',
  userAcessToken: {}
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
        return {
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
    default: {
      return state;
    }
  }
};
