import { connect } from 'react-redux';
import { signUpUser } from './../redux/actions/login';
import SingUpPage from './../components/signup';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        isApiCall: state.user.isApiCall,
        showSignUpError: state.user.showSignUpError,
        errorMessage: state.user.errorMessage
    }
}

const mapDispatchToProps = {
    signUpUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingUpPage);