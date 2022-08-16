import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { colors } from '../theme';

const useStyles = makeStyles(() => ({
  appbar: {
    position: 'sticky',
    //backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  toolbar: {
    margin: 'auto auto'
  },
  button: {
    textTransform: 'capitalize',
    fontFamily: 'consolas !important',
    fontSize: '20px'
  }
}));

export const Navbar: React.FC = () => {
  const classes = useStyles();
  
  return (
    <AppBar className={classes.appbar} color='transparent'>
      <Toolbar className={classes.toolbar}>
        <Button className={classes.button} component={Link} to='/'>Home</Button>
        <Button className={classes.button} component={Link} to='/education'>Education</Button>
        <Button className={classes.button} component={Link} to='/experience'>Experience</Button>
        <Button className={classes.button} component={Link} to='/projects'>Projects</Button>
        <Button className={classes.button} component={Link} to='/about'>About</Button>
      </Toolbar>
    </AppBar>
  );
}
