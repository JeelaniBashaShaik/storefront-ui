import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Switch, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Constants from './../constants';
import ConsumerLanding from './consumer/consumerLanding';
import StoreLanding from './store/storeLanding';
import ProtectedRoute from './../containers/protectedRoute';

const Home = (props) => {

    const logout = React.useCallback(() => {
        props.logout();
    });

    React.useEffect(() => {
        if (props.userRole) {
            if (props.userRole === Constants.STORE_OPERATOR) {
                props.history.push('/home/storeLanding');
            } else if (props.userRole === Constants.CONSUMER) {
                props.history.push('/home/consumerLanding');
            }
        }
    }, [props.userRole])


    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" style={{ flexGrow: 1 }}>
                        StoreFront
                        </Typography>
                    <Button color="secondary" variant="contained" onClick={logout} >
                        Logout
                        </Button>
                </Toolbar>
            </AppBar>
            <Switch>
                <ProtectedRoute exact path="/home/storeLanding">
                    <StoreLanding />
                </ProtectedRoute>
                <ProtectedRoute exact path="/home/consumerLanding">
                    <ConsumerLanding />
                </ProtectedRoute>
            </Switch>
        </div>
    )
}

export default withRouter(Home);