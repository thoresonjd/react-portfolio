import React from 'react';
import { AppBar, Toolbar } from '@mui/material';

export const Navbar: React.FC = () => {
    return (
        <AppBar position="fixed">
            <Toolbar sx={{margin: 'auto auto'}}>
                Toolbar
            </Toolbar>
        </AppBar>
    );
}
