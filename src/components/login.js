import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from "react-router-dom";

export default class LoginPage extends React.Component {

    responseGoogle = (response) => {
        const profileObj = response.profileObj;
        const userProfile = { name: profileObj.name, email: profileObj.email, imageUrl: profileObj.imageUrl };
        this.props.login(userProfile);
    }

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        if (isLoggedIn) {
            return (
                <Redirect to="/profileWizard" /> 
            )
        } else {
          return (
            <GoogleLogin
                clientId="874718926305-grki27ri5ftf1122h1ouk1j7pcns7utq.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
          )}
    }
}
