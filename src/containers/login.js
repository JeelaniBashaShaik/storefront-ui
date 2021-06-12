import { connect } from 'react-redux';
import { loginUser, resetSnackBarMessage } from './../redux/actions/login';
import LoginPage from './../components/login';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        isApiCall: state.user.isApiCall,
        loginMessage: state.user.loginMessage
    }
}

const mapDispatchToProps = {
    loginUser,
    resetSnackBarMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);