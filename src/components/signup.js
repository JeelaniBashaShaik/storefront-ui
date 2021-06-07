import React, { useCallback, useState } from 'react';
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

const SignUpPage = (props) => {

    const [userDetails, setUserDetails] = useState({
        userPrimaryNumber: '',
        userPassword: '',
        userName: '',
        userEmail: '',
        userRole: ''
    });

    const signUpUser = useCallback(() => {
        props.signUpUser(userDetails);
    })

    return (
        <div className="center" style={{ height: 250 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField id="userName" label="Username" value={userDetails.userName} onChange={(event) => setUserDetails({...userDetails, userName: event.target.value})}/>
                <TextField id="userPassword" type="password" label="Password" value={userDetails.userPassword} onChange={(event) => setUserDetails({...userDetails, userPassword: event.target.value})}/>
                <TextField id="userPrimaryNumber" label="Phone Number" value={userDetails.userPrimaryNumber} onChange={(event) => setUserDetails({...userDetails, userPrimaryNumber: event.target.value})}/>
                <TextField id="userEmail" label="Email" value={userDetails.userEmail} onChange={(event) => setUserDetails({...userDetails, userEmail: event.target.value})}/>
                <FormControl component="fieldset" style={{marginTop: 20}}>
                <FormLabel component="legend">Select Role</FormLabel>
                <RadioGroup row defaultValue="Consumer">
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
                    open={props.showSignUpError}
                    message={props.errorMessage}
                    autoHideDuration={7000}
                    className="red-alert"
                />
            </div>
        </div>
    )
}

export default SignUpPage;