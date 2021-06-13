import React from 'react';
import { Redirect } from 'react-router-dom';
import storeImage from './../assets/images/storefront-main.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './../style.css';
import LoginPage from './../containers/login';
import SignUpPage from './../containers/signup';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Landing = (props) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const resetToLogin = () => {
    setValue(0);
  }

  if (props.userRole && props.isLoggedIn) {
    return <Redirect to="/home" />
  }

  return (
    <React.Fragment>
      <div className="center landing">
        <Paper elevation={3} className="landing-paper">
          <Grid container spacing={0} className="height-100">
            <Grid item sm={12} md={6} lg={6} className="center" style={{flexDirection: 'column'}}>
            <Typography variant="h2" component={'span'}>
                storefront
              </Typography>
              <div className="center" style={{flexDirection: 'column'}}>
                <img style={{ maxWidth: '100%', height: 'auto' }} src={storeImage} alt="store" height={370} width={400} />
                <Typography variant="h6" className="center home-page-intro" component={'span'}>
                  Welcome, now browse and place orders from your nearby stores
              </Typography>
              </div>
            </Grid>
            <Grid item sm={12} md={6} lg={6} className="center">
              <Grid container spacing={3}>
                <Grid item sm={12} md={12} lg={12} className="center">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                  >
                    <Tab label="Login" icon={<VerifiedUser />} />
                    <Tab label="Sign up" icon={<AssignmentIcon />} />
                  </Tabs>
                </Grid>
                <Grid item sm={12} md={12} lg={12} className="center" style={{ paddingTop: '0px' }}>
                  <TabPanel value={value} index={0} className="height-400 tab-panel">
                      <LoginPage />
                  </TabPanel>
                  <TabPanel value={value} index={1} className="height-400 tab-panel">
                    <SignUpPage resetToLogin={resetToLogin}/>
                  </TabPanel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default Landing;