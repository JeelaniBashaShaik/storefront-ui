import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, isLoggedIn, ...rest }) => {
    console.log(isLoggedIn, 'isloggedin')
    return (
        <Route {...rest} render={() => {
            return isLoggedIn ? children : <Redirect to="/" />
        }} />
    )
}

export default ProtectedRoute;