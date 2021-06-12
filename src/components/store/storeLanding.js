import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const StoreLanding = () => {
    return (
        <div className="center store-home">
            <Grid container spacing={0}>
                <Grid item xs={6} sm={3} md={3} lg={3} className="center">
                    <Paper elevation={3} className="store-tile center c-pointer">
                    <Typography variant="h6">
                        Orders
                    </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3} className="center">
                    <Paper elevation={3} className="store-tile center c-pointer">
                    <Typography variant="h6">
                        Store Details
                    </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3} className="center">
                    <Paper elevation={3} className="store-tile center c-pointer">
                    <Typography variant="h6">
                        Inventory
                    </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3} className="center">
                    <Paper elevation={3} className="store-tile center c-pointer">
                    <Typography variant="h6">
                        Store Banners
                    </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default StoreLanding;