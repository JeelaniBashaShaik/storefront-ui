import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default class LoginPage extends React.Component {
    
    responseGoogle = (response) => {
        const profileObj = response.profileObj;
        const userProfile = {name: profileObj.name, email: profileObj.email, imageUrl: profileObj.imageUrl};
        this.props.login(userProfile);
    }

    logout = () => {
        this.props.logout();
    }

    render() {
        return (
            <React.Fragment>
               {this.props.isLoggedIn ? 
               <div>
                <GoogleLogout
                clientId="874718926305-grki27ri5ftf1122h1ouk1j7pcns7utq.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={this.logout}
                >
                </GoogleLogout>
                <p>{this.props.userName}</p>
                <p>{this.props.userEmail}</p>
                <img src={this.props.userImage} alt="profile" />
             </div>
             : <GoogleLogin
                    clientId="874718926305-grki27ri5ftf1122h1ouk1j7pcns7utq.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> }
            </React.Fragment>
        )
    }
}
