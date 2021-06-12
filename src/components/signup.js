import React, { useCallback, useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import GoIcon from '@material-ui/icons/ArrowForward';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const SignUpPage = (props) => {

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [userDetails, setUserDetails] = useState({
        userPrimaryNumber: '',
        userPassword: '',
        userName: '',
        userEmail: '',
        userRole: 'Consumer'
    });

    const signUpUser = useCallback(() => {
        props.signUpUser(userDetails);
    }, [props, userDetails]);

    const hideSnackBar = useCallback(() => {
        setShowSnackBar(false);
    }, []);
    
    useEffect(() => {
        if (props.signUpMessage) {
            setShowSnackBar(true);
            setTimeout(() => {
                props.resetSnackBarMessage();
                props.resetToLogin();
            }, 2000);
        }
        if (props.signUpSuccess) {
            setUserDetails({
                userPrimaryNumber: '',
                userPassword: '',
                userName: '',
                userEmail: '',
                userRole: ''    
            });
        }
    }, [props]);
    

    return (
        <div className="center" style={{ height: 250 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField id="userName" label="Username" value={userDetails.userName} onChange={(event) => setUserDetails({...userDetails, userName: event.target.value})}/>
                <TextField id="userPassword" type="password" label="Password" value={userDetails.userPassword} onChange={(event) => setUserDetails({...userDetails, userPassword: event.target.value})}/>
                <TextField id="userPrimaryNumber" label="Phone Number" value={userDetails.userPrimaryNumber} onChange={(event) => setUserDetails({...userDetails, userPrimaryNumber: event.target.value})}/>
                <TextField id="userEmail" label="Email" value={userDetails.userEmail} onChange={(event) => setUserDetails({...userDetails, userEmail: event.target.value})}/>
                <FormControl component="fieldset" style={{marginTop: 20}}>
                <FormLabel component="legend">Select Role</FormLabel>
                <RadioGroup row defaultValue="Consumer" onChange={(event) => setUserDetails({...userDetails, userRole: event.target.value})}>
                    <FormControlLabel value="Consumer" control={<Radio color="primary" />} label="Consumer" labelPlacement="end" />
                    <FormControlLabel value="Store Operator" control={<Radio color="primary" />} label="Store Operator" labelPlacement="end" />
                    </RadioGroup>
                    </FormControl>
                <Button variant="contained" color="primary" className="button-curve" style={{ marginTop: 15, cursor: 'pointer' }}
                    endIcon={props.isApiCall ? <CircularProgress color="inherit" size={20}/> : <GoIcon />} onClick={signUpUser} disabled={props.isApiCall}>
                    SignUp 
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={showSnackBar}
                    autoHideDuration={2000}
                    onClose={hideSnackBar}>
                    <Alert severity={props.signUpSuccess ? "success" : "error"} onClose={hideSnackBar}>
                        {props.signUpMessage}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default SignUpPage;