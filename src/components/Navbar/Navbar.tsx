import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavbarStyles } from './navbar-styles';

export const Navbar: React.FC = () => {
  const classes = useNavbarStyles();
  const [navbar, updateNavbar] = useState<boolean>(false);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <AppBar className={navbar ? classes.blurred : classes.transparent} position='sticky' color='transparent'>
      <Toolbar className={classes.toolbar}>
        <Button component={Link} to='/'><Typography className={classes.buttonText}>Home</Typography></Button>
        <Button component={Link} to='/education'><Typography className={classes.buttonText}>Education</Typography></Button>
        <Button component={Link} to='/experience'><Typography className={classes.buttonText}>Experience</Typography></Button>
        <Button component={Link} to='/projects'><Typography className={classes.buttonText}>Projects</Typography></Button>
        <Button component={Link} to='/about'><Typography className={classes.buttonText}>About</Typography></Button>
      </Toolbar>
    </AppBar>
  );
}
