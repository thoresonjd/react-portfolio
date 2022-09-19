import React from 'react';
import { Box, Typography } from '@mui/material';
import { useFooterStyles } from './footer-styles';

export const Footer: React.FC = () => {
  const classes: any = useFooterStyles();
  const year: number = new Date().getFullYear();

  return (
    <Box className={classes.footer}>
      <Typography className={classes.copyright}>
        copyright © {year} justin thoreson
      </Typography>
    </Box>
  );
}
