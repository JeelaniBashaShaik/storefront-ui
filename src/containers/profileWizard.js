import { connect } from 'react-redux';
import { logout } from './../redux/actions/login';
import ProfileWizard from './../components/profileWizard';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
};

const mapDispatchToProps = {
    logout
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWizard)