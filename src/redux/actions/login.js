import { LOGIN, LOGOUT, SAVE_PROFILE_SUCCESS, SAVE_PROFILE_FAIL } from '../types/login';
import axios from 'axios';

export const login = (payload) => ({type: LOGIN, payload});
export const logout = () => ({type: LOGOUT});
export const saveProfileSuccess = (payload) => {
    console.log('inside saveprofile success');
    return  {type: SAVE_PROFILE_SUCCESS, payload};
};

export const saveProfile = (payload) => {
    return (dispatch) => {
        axios.post(`https://storefront-be.herokuapp.com/user`, payload).then(response => {
            if (response) {
                console.log(response, 'response')
                dispatch(saveProfileSuccess(payload));
            }
        }).catch(() => dispatch(SAVE_PROFILE_FAIL));
    }
}