import { connect } from 'react-redux';
import Home from './../components/home';

const mapStateToProps = (state) => {
    return {
        userRole: state.user.userRole
    }
}

export default connect(mapStateToProps, null)(Home);