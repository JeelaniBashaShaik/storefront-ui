import { connect } from 'react-redux';
import StoreDetails from './../components/store/storeDetails';
import { addStoreDetails, getStoreDetails, updateStoreDetails, resetSnackbarMessage, getUserStores } from './../redux/actions/storeDetails';

const mapStateToProps = (state) => {
    return {
        ...state.storeDetails,
        isApiCall: state.storeDetails.isApiCall,
        userLinkedNumber: state.user.userPrimaryNumber,
        userEmail: state.user.userEmail,
        token: state.user.token,
        userStores: state.storeDetails.userStores
    }
}

const mapDispatchToProps = {
    addStoreDetails,
    getStoreDetails,
    updateStoreDetails,
    resetSnackbarMessage,
    getUserStores
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreDetails);