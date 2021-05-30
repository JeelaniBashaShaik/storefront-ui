import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { GoogleLogout } from 'react-google-login';
import Snackbar from '@material-ui/core/Snackbar';

export default class Home extends React.Component {

    state = {
        showToast: false
    }

    componentDidMount() {
        window['isUpdateAvailable'].then(isAvailable => {
            if (isAvailable) {
                this.setState({showToast: true});
                alert('new version available');
            }
        });
    }

    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <div style={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h4" style={{flexGrow: 1}}>
                        StoreFront
                        </Typography>
                        <GoogleLogout
                            clientId="874718926305-grki27ri5ftf1122h1ouk1j7pcns7utq.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={this.logout}
                            render={renderProps => (
                                <Button color="secondary" variant="contained" onClick={renderProps.onClick} >
                                    Logout
                                </Button>
                            )}
                            >
                            </GoogleLogout>
                    </Toolbar>
                </AppBar>
                <Typography variant="h6" style={{flexGrow: 1}}>
                    Home
                </Typography>
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    open={this.state.showToast}
                    autoHideDuration={10000}
                    message="New Content Available. Refresh !!!"
                />
            </div>
        )
    }
}