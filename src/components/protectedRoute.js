import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, isLoggedIn, ...rest }) => {
    return (
        <Route {...rest} render={() => {
            return isLoggedIn ? children : <Redirect to="/" />
        }} />
    )
}

export default ProtectedRoute;