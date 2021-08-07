import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import GoIcon from '@material-ui/icons/ArrowForward';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const StoreDetails = (props) => {

    const storeTypes = [
        'Kirana',
        'General Stores',
        'Meat',
        'Eggs',
        'Bakery',
        'Super Market'
    ];

    const [showSnackBar, setShowSnackBar] = React.useState(false);
    const [storeDetails, setStoreDetails] = React.useState({
        storeId: '',
        storeName: '',
        storeEmail: '',
        storePrimaryNumber: '',
        storeSecondaryNumber: '',
        storeAddress: '',
        storeImageUrl: '',
        storeType: '',
        storePincode: '',
        userLinkedNumber: ''
    });

    const resetStore = () => {
        setStoreDetails({
            ...storeDetails,
            storeId: '',
            storeName: '',
            storeEmail: '',
            storePrimaryNumber: '',
            storeSecondaryNumber: '',
            storeAddress: '',
            storeImageUrl: '',
            storeType: '',
            storePincode: '',    
        })
    }

    React.useEffect(() => {
        if (!storeDetails.userLinkedNumber) {
            setStoreDetails({...storeDetails, userLinkedNumber: props.userLinkedNumber.toString()});
        }
        if (props.storeApiMessage) {
            setShowSnackBar(true);
            setTimeout(() => {
                props.resetSnackbarMessage();
            }, 2000);
        }
        if (props.addStoreSuccess) {
            resetStore();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [storeDetails.userLinkedNumber, props.storeApiMessage, props.addStoreSuccess, resetStore]);

    React.useEffect(() => {
        props.getUserStores(props.userLinkedNumber, props.token);
        if (props.userStores) {
            console.log(props.userStores)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const addStore = () => {
        props.addStoreDetails(storeDetails, props.token);
    }

    const hideSnackBar = React.useCallback(() => {
        setShowSnackBar(false);
    }, []);

    const chooseImage = (event) => {
        const [file] = event.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            setStoreDetails({...storeDetails, storeImageUrl: reader.result});
        }
       
    }

    
    return (
        <div className="store-details">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={6} lg={6} className="center store-detail-item">
                            <Paper elevation={3} style={{ height: '100%', width: '100%', paddingLeft: '20px' }}>
                                <Typography variant="h6" component={'span'}>
                                    Add Store
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <TextField id="storeId" autoFocus label="Store Id" size="small" value={storeDetails.storeId} onChange={(event) => setStoreDetails({...storeDetails, storeId: event.target.value})}/>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <TextField id="storeName" label="Store Name" value={storeDetails.storeName} onChange={(event) => setStoreDetails({...storeDetails, storeName: event.target.value})}/>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <TextField id="storePrimaryNumber" label="Store Primary Number" value={storeDetails.storePrimaryNumber} onChange={(event) => setStoreDetails({...storeDetails, storePrimaryNumber: event.target.value})}/>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <TextField id="storeSecondaryNumber" label="Store Secondary Number" value={storeDetails.storeSecondaryNumber} onChange={(event) => setStoreDetails({...storeDetails, storeSecondaryNumber: event.target.value})}/>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <Autocomplete id="storeType" options={storeTypes} value={storeDetails.storeType} getOptionLabel={(option) => option ? option : ''} getOptionSelected={(option, value) => option ? option === value : ''} onChange={(event, newValue) => {setStoreDetails({...storeDetails, storeType: newValue})}}
                                            renderInput={(params) => <TextField {...params} label="Store Type" />}/>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <TextField id="storePincode" label="Store Pincode" value={storeDetails.storePincode} onChange={(event) => setStoreDetails({...storeDetails, storePincode: event.target.value})}/>

                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <TextField id="storeAddress" value={storeDetails.storeAddress} onChange={(event) => setStoreDetails({...storeDetails, storeAddress: event.target.value})} label="Store Address" multiline rows={4}/>
                                        </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <TextField id="storeEmail" label="Store Email" value={storeDetails.storeEmail} onChange={(event) => setStoreDetails({...storeDetails, storeEmail: event.target.value})}/>
                                            <Button style={{marginTop: '25px'}}
                                                variant="contained"
                                                component="label"
                                                >
                                                Upload Store Image
                                                <input
                                                    type="file"
                                                    hidden
                                                    onChange={chooseImage}
                                                />
                                                </Button>
                                    </Grid>
                                    <Grid item xs={4} sm={4} md={4} lg={4}>
                                        <Button variant="contained" color="primary" className="button-curve"
                                        endIcon={false ? <CircularProgress color="inherit" size={20}/> : <GoIcon />} onClick={addStore}>
                                        Add Store 
                                        </Button>
                                        <IconButton color="secondary" onClick={resetStore} >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} className="center store-detail-item">
                            <Paper elevation={3} style={{ height: '100%', width: '100%' }}>
                                <Typography variant="h6" component={'span'}>
                                Update Store
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} className="center store-detail-item">
                            <Paper elevation={3} style={{ height: '100%', width: '100%' }}>
                                <div className="center">
                                    <Typography variant="h6" component={'span'}>
                                    List Stores
                                </Typography>
                                </div>
                            
                            <div style={{overflow: 'auto'}}>
                               {props.userStores.length > 0 && props.userStores.map(store => {
                                   return (
                                       <div key={store.storeId}>
                                           <Typography variant="h6" component={'span'}>
                                {store.storeName}
                            </Typography>
                            <img src={store.storeImageUrl} height="100" width="100" alt="store" />
                                       </div>
                                   )
                               })} 
                               </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    open={showSnackBar}
                    autoHideDuration={2000}
                    onClose={hideSnackBar}>
                    <MuiAlert elevation={6} variant="filled" severity={props.addStoreSuccess ? "success" : "error"} onClose={hideSnackBar}>
                        {props.storeApiMessage}
                    </MuiAlert>
                </Snackbar>
        </div>
    );
}

export default StoreDetails;