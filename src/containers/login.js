import { connect } from 'react-redux';
import { login } from './../redux/actions/login';
import LoginPage from './../components/login';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userName: state.user.userName,
        userEmail: state.user.userEmail,
        userImage: state.user.userImage,
    }
}

const mapDispatchToProps = {
    login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);