import React from 'react';
import { withRouter } from 'react-router';

const WelcomeScreen = (props) => {
    return (
    <div>
        Welcome to StoreFront. Now you have successfully registered with us.
        <button onClick={() => {
            props.history.push('/home');
        }}>Home</button>
    </div>)
}

export default withRouter(WelcomeScreen);