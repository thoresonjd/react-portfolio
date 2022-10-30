import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { use404Styles } from './404-styles';
import thisIsFine from '../../assets/images/this-is-fine.png';

export const NotFound: React.FC = () => {
  const classes: any = use404Styles();

  return (
    <>
      <Helmet>
        <title>404 Not Found</title>
      </Helmet>
      <Box className={classes.errorBox}>
        <Typography className={classes.title}>404</Typography>
        <Typography className={classes.subtitle}>Not Found</Typography>
        <img className={classes.image} src={thisIsFine} alt='404' />
      </Box>
    </>
  );
}
