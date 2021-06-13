import * as StoreTypes from './../types/storeDetails';

const initialStoreDetails = {
    storeId: '',
    storeName: '',
    storeAddress: '',
    storePrimaryNumber: '',
    storeSecondaryNumber: '',
    storePincode: '',
    storeType: '',
    storeApiMessage: '',
    userStores: []
}

export const StoreDetailsReducer = (state = initialStoreDetails, action) => {
    switch (action.type) {
        case 'API_START': {
            return {
              ...state,
              isApiCall: true
            }
        }
        case StoreTypes.GET_STORE_DETAILS: {
            return {
                ...state,
            }
        }
        case StoreTypes.ADD_STORE_DETAILS_SUCCESS: {
            return {
                ...state,
                isApiCall: false,
                addStoreSuccess: true,
                storeApiMessage: 'Store added succesfully !!!'
            }
        }
        case StoreTypes.ADD_STORE_DETAILS_FAIL: {
            return {
                ...state,
                isApiCall: false,
                addStoreSuccess: false,
                storeApiMessage: action.payload
            }
        }
        case 'RESET_SNACK_MESSAGE': {
            return {
              ...state,
              storeApiMessage: '',
            }
        }
        case 'LIST_STORES': {
            return {
              ...state,
              isApiCall: false,
              userStores: action.payload
            }
        }
        case 'LIST_STORES_FAIL': {
            return {
              ...state,
              isApiCall: false,
              storeApiMessage: 'Failed to list stores',
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}
