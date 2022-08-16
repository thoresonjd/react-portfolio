import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar sx={{margin: 'auto auto'}}>
        <Button component={Link} to='/' variant='text'>Home</Button>
        <Button component={Link} to='/education' variant='text'>Education</Button>
        <Button component={Link} to='/experience' variant='text'>Experience</Button>
        <Button component={Link} to='/projects'variant='text'>Projects</Button>
        <Button component={Link} to='/about' variant='text'>About</Button>
      </Toolbar>
    </AppBar>
  );
}
