import React from 'react';
import storeImage from './../assets/images/storefront-main.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// import LoginPage from './../containers/login';

export const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={6}>
          <div className="center">
            <Typography variant="h1" gutterBottom className="home-page-intro">
              Welcome to StoreFront. Now browse and place orders from your nearby stores
            </Typography>
        </div>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
        <div className="center">
          <img style={{maxWidth: '100%',height: 'auto'}} src={storeImage} alt="store" height={500} width={600} />
        </div>
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
        </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};
