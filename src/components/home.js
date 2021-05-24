import React from 'react';
import storeImage from './../assets/images/store-adhoc.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const Home = () => {
  return (
    <React.Fragment>
      <div className="home">
      <Grid container spacing={3}>
        <Grid item sm={12} md={6} lg={6}>
         Text
        </Grid>
        <Grid item sm={12} md={6} lg={6}>
        <div>
          <img src={storeImage} alt="store image" height={500} width={500} />
        </div>
        </Grid>
        </Grid>
        
      </div>
    </React.Fragment>
  );
};
