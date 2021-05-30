import { connect } from 'react-redux';
import Landing from './../components/landing';

const mapStateToProps = (state) => {
    return {
        userRole: state.user.userRole,
        isLoggedIn: state.user.isLoggedIn
    }
};

export default connect(mapStateToProps, null)(Landing);