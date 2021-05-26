import React from 'react';
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
      this.setState({activeStep: activeStep + 1});
    }

    setRole = (role) => {
      this.setState({userRole: role});
    }

    render() {
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
            <div style={{marginTop: '10px'}}><TextField id="userPrimaryNumber"  variant="outlined" label="Primary Number"/></div>
            <div style={{marginTop: '10px'}}><TextField id="userSecondaryNumber"  variant="outlined" label="Secondary Number"/></div>
            <div style={{marginTop: '10px'}}><TextField id="userAddress"  variant="outlined" label="Address" multiline rows={4}/></div>
          </div>}

          {this.state.activeStep === 1 && <div>
            <Grid container spacing={3}>
              <Grid item sm={12} md={6} lg={6}>
                <Paper elevation={3} onClick={() => this.setRole('Store-Operator')}>
                <img src={storeOperatorLogo} alt="store Operator" height="100" widht="150"/>
                <div class="center">Store Operator</div>
              </Paper>
              </Grid>
              <Grid item sm={12} md={6} lg={6}>
                <Paper elevation={3} onClick={() => this.setRole('Consumer')}>
                <img src={consumerLogo} alt="consumer Operator" height="100" widht="150"/>
                <div class="center">Consumer</div>
              </Paper>
              </Grid>
            </Grid>
            {this.state.userRole && <Paper elevation={3}>Selected Role: {this.state.userRole}</Paper>}
          </div>

          }

          {this.state.activeStep === 2 && <div>

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
            </div>
        </div>
        )
    }
}