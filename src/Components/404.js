import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:"center",
    margin:'100px 0',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(40),
    },
  },
  h1:{
      color:'red',
      fontSize:"4rem",
      textAlign:'center'

  },
  p:{
    color:'rgb(255, 99, 99)',
    fontSize:"3rem",
    textAlign:'center',
    textTransform:'capitalize', 
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Paper elevation={3} >
          <h1 className={classes.h1}>404</h1>
          <p className={classes.p}>page not found</p>
      </Paper>
    </div>
  );
}
