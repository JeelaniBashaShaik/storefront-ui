import React from 'react';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const storeItems = [
    {itemName: 'Orders', itemImage: '', itemLink: ''},
    {itemName: 'Store Details', itemImage: '', itemLink: '/home/storeLanding/storeDetails'},
    {itemName: 'Inventory', itemImage: '', itemLink: ''},
    {itemName: 'Store Banners', itemImage: '', itemLink: ''},
]

const StoreLanding = (props) => {

    const navigate = React.useCallback((itemLink) => {
        if (itemLink){
           props.history.push(itemLink);
        }
    })
    return (
        <div className="center store-home">
            <Grid container spacing={0}>
                {storeItems.length && storeItems.map(storeItem => {
                    return (
                        <Grid key={storeItem.itemName} item xs={6} sm={3} md={3} lg={3} className="center">
                            <Paper elevation={3} className="store-tile center c-pointer" onClick={() => navigate(storeItem.itemLink)}>
                                <Typography variant="h6" component={'span'}>
                                {storeItem.itemName}
                                </Typography>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default withRouter(StoreLanding);