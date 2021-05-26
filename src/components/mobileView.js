import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.up('md')]: {
        display: 'none',
    },
    [theme.breakpoints.up('lg')]: {
        display: 'none',
    },
  },
}));

export default function MobileView({children}) {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
}