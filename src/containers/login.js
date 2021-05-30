import { connect } from 'react-redux';
import { login, checkForUser } from './../redux/actions/login';
import LoginPage from './../components/login';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userName: state.user.userName,
        userEmail: state.user.userEmail,
        userImage: state.user.userImage,
        userRole: state.user.userRole,
        isApiCall: state.user.isApiCall
    }
}

const mapDispatchToProps = {
    login,
    checkForUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);