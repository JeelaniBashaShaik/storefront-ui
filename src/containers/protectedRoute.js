import { connect } from 'react-redux';
import ProtectedRoute from '../components/protectedRoute';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
};

export default connect(mapStateToProps, null)(ProtectedRoute);
