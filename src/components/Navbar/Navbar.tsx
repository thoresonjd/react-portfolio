import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavbarStyles } from './navbar-styles';

export const Navbar: React.FC = () => {
  const classes: any = useNavbarStyles();

  return (
    <AppBar className={classes.appbar} position='relative' color='transparent'>
      <Toolbar className={classes.toolbar}>
        <Link to='/'><button className={classes.button}>Home</button></Link>
        <Link to='/education'><button className={classes.button}>Education</button></Link>
        <Link to='/experience'><button className={classes.button}>Experience</button></Link>
        <Link to='/projects'><button className={classes.button}>Projects</button></Link>
        <Link to='/music'><button className={classes.button}>Music</button></Link>
        <Link to='/resume'><button className={classes.button}>Resume</button></Link>
        <Link to='/about'><button className={classes.button}>About</button></Link>
      </Toolbar>
    </AppBar>
  );
}
