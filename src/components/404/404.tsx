import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { use404Styles } from './404-styles';

export const NotFound: React.FC = () => {
  const classes = use404Styles();

  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <Box className={classes.notFoundBox}>
        <Box>
          <Typography className={classes.title} variant='h1'>404</Typography>
          <Typography className={classes.subtitle} variant='h3'>Not Found</Typography>
        </Box>
      </Box>
    </>
  );
}
