import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { GoogleLogout } from 'react-google-login';


export default class ProfileWizard extends React.Component {

    logout = () => {
        this.props.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{flexGrow: 1}}>
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
        </div>
        )
    }
}