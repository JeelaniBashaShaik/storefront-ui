import { LOGOUT, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAIL, USER_VERIFIED, API_START, LOGIN_FAILED, SIGNUP_FAILED, SIGNUP_SUCCESS, RESET_SNACK_MESSAGE } from '../types/login';
import axios from 'axios';

const serverUrl = 'https://storefront-be.herokuapp.com';

export const logout = () => ({type: LOGOUT});

export const userVerified = (payload) => ({type: USER_VERIFIED, payload});

export const loginFailed = (payload) => ({type: LOGIN_FAILED, payload});

export const signUpFailed = (payload) => ({type: SIGNUP_FAILED, payload});

export const signUpSuccess = (payload) => ({type: SIGNUP_SUCCESS});

export const apiCallStart = () => ({type: API_START});

export const resetSnackBarMessage = () => ({type: RESET_SNACK_MESSAGE});

export const loginUser = (userDetails) => {
    return (dispatch) => {
        dispatch(apiCallStart());
        axios.post(`${serverUrl}/start/login`, userDetails).then(({data}) => {
            if (data && data.success) {
                dispatch(userVerified(data));
            } else {
                dispatch(loginFailed(data.errorMessage));
            }
        })
    }
}

export const signUpUser = (userDetails) => {
    return (dispatch) => {
        dispatch(apiCallStart());
        axios.post(`${serverUrl}/start/register`, userDetails).then(({data}) => {
            if (data && data.success) {
                dispatch(signUpSuccess());
            } else {
                dispatch(signUpFailed(data.errorMessage));
            }
        })
    }
}

export const saveProfileSuccess = (payload) => {
    return  {type: SAVE_PROFILE_SUCCESS, payload};
};

export const saveProfile = (payload) => {
    return (dispatch) => {
        axios.post(`${serverUrl}/user`, payload).then(response => {
            if (response) {
                dispatch(saveProfileSuccess(payload));
            }
        }).catch(() => dispatch(SAVE_PROFILE_FAIL));
    }
}