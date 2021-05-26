import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
        display: 'block',
    },
    [theme.breakpoints.up('lg')]: {
        display: 'block',
    },
  },
}));

export default function WebView({children}) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}