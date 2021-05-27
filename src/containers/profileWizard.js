import { connect } from 'react-redux';
import { logout, saveProfile } from './../redux/actions/login';
import ProfileWizard from './../components/profileWizard';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userName: state.user.userName,
        userEmail: state.user.userEmail,
        canNavigateToWelcome: state.user.canNavigateToWelcome
    }
};

const mapDispatchToProps = {
    logout,
    saveProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWizard)