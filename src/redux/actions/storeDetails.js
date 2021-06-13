import * as StoreTypes from './../types/storeDetails';
import axios from 'axios';

const serverUrl = 'https://storefront-be.herokuapp.com';

export const apiCallStart = () => ({type: 'API_START'});

export const addStoreSuccess = () => ({type: StoreTypes.ADD_STORE_DETAILS_SUCCESS});

export const addStoreFail = (payload) => ({type: StoreTypes.ADD_STORE_DETAILS_FAIL, payload});

export const listUserStores = (payload) => ({type: 'LIST_STORES', payload});

export const listUserStoresFail = (payload) => ({type: 'LIST_STORES_FAIL', payload});

export const addStoreDetails = (storeDetails, token) => {
    return (dispatch) => {
        dispatch(apiCallStart());
        axios.post(`${serverUrl}/store`, storeDetails, {headers: {'x-access-token': token }}).then(({data}) => {
            if (data && data.success) {
                dispatch(addStoreSuccess());
            } else {
                dispatch(addStoreFail(data.errorMessage));
            }
        })
    }
}

export const getUserStores = (userLinkedNumber, token) => {
    return (dispatch) => {
        dispatch(apiCallStart());
        axios.get(`${serverUrl}/store/list/${userLinkedNumber}`, {headers: {'x-access-token': token }}).then(({data}) => {
            if (data && data.success) {
                delete data.success;
                const stores = Object.values(data);
                dispatch(listUserStores(stores));
            } else {
                dispatch(listUserStoresFail());
            }
        })
    }
}

export const updateStoreDetails = (payload) => ({type: StoreTypes.UPDATE_STORE_DETAILS, payload});

export const getStoreDetails = (payload) => ({type: StoreTypes.GET_STORE_DETAILS});

export const resetSnackbarMessage = () => ({type: 'RESET_SNACK_MESSAGE'});
