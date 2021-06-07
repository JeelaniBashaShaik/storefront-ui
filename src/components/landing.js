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
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Landing = (props) => {
  if (props.userRole) {
    //  return <Redirect to="/home" />
  } else if (!props.userRole && props.isLoggedIn) {
    //  return <Redirect to="/profileWizard" />
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className="center landing">
        <Paper elevation={3} className="landing-paper">
          <Grid container spacing={0} className="height-100">
            <Grid item sm={12} md={6} lg={6} className="center">
              <div>
                <img style={{ maxWidth: '100%', height: 'auto' }} src={storeImage} alt="store" />
                <Typography variant="h6" gutterBottom className="home-page-intro">
                  Welcome to <strong>StoreFront</strong>. Now browse and place orders from your nearby stores
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
                    <SignUpPage />
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