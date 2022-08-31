import React from 'react';
import { Box, Typography } from '@mui/material';
import { useFooterStyles } from './footer-styles';

export const Footer: React.FC = () => {
  const classes = useFooterStyles();
  const year = new Date().getFullYear();

  return (
    <Box className={classes.footer}>
      <Typography className={classes.copyright} variant='h5'>
        Copyright © {year} Justin Thoreson
      </Typography>
    </Box>
  );
}
