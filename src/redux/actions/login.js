import { LOGIN, LOGOUT, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAIL, USER_VERIFIED } from '../types/login';
import axios from 'axios';

const serverUrl = 'https://storefront-be.herokuapp.com';

export const login = (payload) => ({type: LOGIN, payload});

export const logout = () => ({type: LOGOUT});

export const userVerified = (payload) => ({type: USER_VERIFIED, payload});

export const checkForUser = (email) => {
    return (dispatch) => {
        axios.get(`${serverUrl}/user/${email}`).then(({data}) => {
            console.log(data, 'res');
            if (data && data.success) {
                dispatch(userVerified({userRole: data.userRole}));
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