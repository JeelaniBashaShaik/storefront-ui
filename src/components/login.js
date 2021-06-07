import React, { useCallback, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import GoIcon from '@material-ui/icons/ArrowForward';
import Snackbar from '@material-ui/core/Snackbar';

const LoginPage = (props) => {

    const [userDetails, setUserDetails] = useState({
        userPrimaryNumber: '',
        userPassword: ''
    });

    const loginUser = useCallback(() => {
        props.loginUser(userDetails);
    })

    return (
        <div className="center" style={{ height: 250 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField id="userPrimaryNumber" label="Phone Number" value={userDetails.userPrimaryNumber} onChange={(event) => setUserDetails({...userDetails, userPrimaryNumber: event.target.value})}/>
                <TextField id="userPassword" type="password" label="Password" value={userDetails.userPassword} onChange={(event) => setUserDetails({...userDetails, userPassword: event.target.value})}/>
                <Button variant="contained" color="primary" className="button-curve" style={{ marginTop: 25, cursor: 'pointer' }}
                    endIcon={props.isApiCall ? <CircularProgress color="inherit" size={20}/> : <GoIcon />} onClick={loginUser} disabled={props.isApiCall}>
                    Authenticate 
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={props.showLoginError}
                    message={props.errorMessage}
                    autoHideDuration={7000}
                    className="red-alert"
                />
            </div>
        </div>
    )
}

export default LoginPage;