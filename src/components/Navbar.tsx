import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{margin: 'auto auto'}}>
                <Button component={Link} to='/' variant='contained'>Home</Button>
                <Button component={Link} to='/education' variant='contained'>Education</Button>
                <Button component={Link} to='/experience' variant='contained'>Experience</Button>
            </Toolbar>
        </AppBar>
    );
}
