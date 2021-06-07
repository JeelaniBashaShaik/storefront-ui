import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/login';
import LoginPage from './../components/login';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        isApiCall: state.user.isApiCall,
        showLoginError: state.user.showLoginError,
        errorMessage: state.user.errorMessage
    }
}

const mapDispatchToProps = {
    loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);