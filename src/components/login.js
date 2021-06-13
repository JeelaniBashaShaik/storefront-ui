import React, { useCallback, useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import GoIcon from '@material-ui/icons/ArrowForward';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginPage = (props) => {
    
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [userDetails, setUserDetails] = useState({
        userPrimaryNumber: '',
        userPassword: ''
    });

    const loginUser = useCallback(() => {
        props.loginUser(userDetails);
    }, [props, userDetails]);

    const hideSnackBar = useCallback(() => {
        setShowSnackBar(false);
    }, []);

    useEffect(() => {
        if (props.loginMessage) {
            setShowSnackBar(true);
            setTimeout(() => {
                props.resetSnackBarMessage();
            }, 2000);
        }
    }, [props])

    return (
        <div className="center" style={{ height: 250 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField id="userPrimaryNumber" autoFocus size="small" label="Phone Number" value={userDetails.userPrimaryNumber} onChange={(event) => setUserDetails({...userDetails, userPrimaryNumber: event.target.value})}/>
                <TextField id="userPassword" size="small" type="password" label="Password" value={userDetails.userPassword} onChange={(event) => setUserDetails({...userDetails, userPassword: event.target.value})}/>
                <Button variant="contained" color="primary" className="button-curve" style={{ marginTop: 25, cursor: 'pointer' }}
                    endIcon={props.isApiCall ? <CircularProgress color="inherit" size={20}/> : <GoIcon />} onClick={loginUser} disabled={props.isApiCall}>
                    Authenticate 
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={showSnackBar}
                    autoHideDuration={2000}
                    onClose={hideSnackBar}>
                    <Alert severity="error" onClose={hideSnackBar}>
                        {props.loginMessage}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default LoginPage;