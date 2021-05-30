import { connect } from 'react-redux';
import Home from './../components/home';
import { logout } from './../redux/actions/login';

const mapStateToProps = (state) => {
    return {
        userRole: state.user.userRole
    }
}

const mapDispatchToProps = {
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);