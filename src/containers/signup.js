import { connect } from 'react-redux';
import { signUpUser, resetSnackBarMessage } from './../redux/actions/login';
import SingUpPage from './../components/signup';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        isApiCall: state.user.isApiCall,
        showSnackBar: state.user.showSnackBar,
        signUpMessage: state.user.signUpMessage,
        signUpSuccess: state.user.signUpSuccess
    }
}

const mapDispatchToProps = {
    signUpUser,
    resetSnackBarMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUpPage);