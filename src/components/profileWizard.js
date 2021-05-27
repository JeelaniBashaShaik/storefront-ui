import React from 'react';
import { Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { GoogleLogout } from 'react-google-login';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import consumerLogo from './../assets/images/consumer.png';
import storeOperatorLogo from './../assets/images/store-operator.png';
import Grid from '@material-ui/core/Grid';


export default class ProfileWizard extends React.Component {

    state = {
      activeStep: 0,
      userRole: '',
      userPrimaryNumber: '',
      userSecondaryNumber: '',
      userAddress: ''
    }

    logout = () => {
        this.props.logout();
        this.props.history.push('/');
    }

    handleBack = () => {
      const activeStep = this.state.activeStep;
      this.setState({activeStep: activeStep - 1});
    }

    handleNext = () => {
      const activeStep = this.state.activeStep;
      if (activeStep !== 1) {
        this.setState({activeStep: activeStep + 1});
      } else {
        const saveProfileRequest = {
          userRole: this.state.userRole,
          userName: this.props.userName,
          userEmail: this.props.userEmail,
          userPrimaryNumber: this.state.userPrimaryNumber,
          userSecondaryNumber: this.state.userSecondaryNumber,
          userAddress: this.state.userAddress
        }
        this.props.saveProfile(saveProfileRequest);
      }
    }

    setUserPrimaryNumber = (event) => {
      this.setState({userPrimaryNumber: event.target.value});
    }

    setUserSecondaryNumber = (event) => {
      this.setState({userSecondaryNumber: event.target.value});
    }

    setUserAddress = (event) => {
      this.setState({userAddress: event.target.value});
    }

    setRole = (role) => {
      this.setState({userRole: role});
    }

    render() {
      console.log(this.props.canNavigateToWelcome, 'canNavigatetoHome');
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
        <Stepper activeStep={this.state.activeStep} alternativeLabel> 
          <Step key="1">
            <StepLabel>Basic Details</StepLabel>
          </Step>
          <Step key="2">
            <StepLabel>Select Role</StepLabel>
          </Step>
        </Stepper>

        <div className="center">
          {this.state.activeStep === 0 && <div>
            <div><TextField id="userName" label="Name" disabled  variant="outlined" defaultValue={this.props.userName}/></div>
            <div style={{marginTop: '10px'}}><TextField id="userEmail" label="Email"  variant="outlined" disabled defaultValue={this.props.userEmail}/></div>
            <div style={{marginTop: '10px'}}><TextField id="userPrimaryNumber"  variant="outlined" value={this.state.userPrimaryNumber} onChange={this.setUserPrimaryNumber}  label="Primary Number"/></div>
            <div style={{marginTop: '10px'}}><TextField id="userSecondaryNumber"  variant="outlined" value={this.state.userSecondaryNumber} onChange={this.setUserSecondaryNumber} label="Secondary Number"/></div>
            <div style={{marginTop: '10px'}}><TextField style={{width: '100%'}} id="userAddress" value={this.state.userAddress} onChange={this.setUserAddress}   variant="outlined" label="Address" multiline rows={4}/></div>
          </div>}

          {this.state.activeStep === 1 && <div>
            <Grid container spacing={3}>
              <Grid item sm={12} md={6} lg={6}>
                <Paper elevation={3} onClick={() => this.setRole('Store-Operator')}>
                  <div style={{height:'150px', width: '150px'}} className="center">
                    <Typography variant="h6">Store Operator</Typography>
                  </div>
              </Paper>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Paper elevation={3} onClick={() => this.setRole('Consumer')}>
                <div style={{height:'150px', width: '150px'}} className="center">
                    <Typography variant="h6">Consumer</Typography>
                  </div>
              </Paper>
              </Grid>
            </Grid>
            {this.state.userRole && <Paper elevation={3}>Selected Role: {this.state.userRole}</Paper>}
          </div>

          }
        </div>
        
        <div>
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
              <Button
                disabled={this.state.activeStep === 0}
                onClick={this.handleBack}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={this.handleNext}>
                {this.state.activeStep === 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
            {this.props.canNavigateToWelcome && <Redirect to="/welcome" />}
            </div>
        </div>
        )
    }
}