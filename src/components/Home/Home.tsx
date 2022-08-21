import React from 'react';
import Typed from 'react-typed';
import { Box, Grid, Avatar, Typography } from '@mui/material';
import { useHomeStyles } from './home-styles';
import headshot from '../../assets/images/alien.jpg';

export const Home: React.FC = () => {
  const classes = useHomeStyles();

  return (
    <Grid container columnGap={10} className={classes.outerGrid}>
      <Grid container xl={4}>
        <Box className={classes.typedBox}>
          <Typography variant='h3' className={classes.title}>
            <Typed strings={['Justin Thoreson']} typeSpeed={50} />     
          </Typography>
          <Typography variant='h4' className={classes.subtitle}>
            <Typed
              strings={[
                'Student',
                'Developer',
                'Nerd'
              ]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />     
          </Typography>
        </Box>
      </Grid>
      <Grid container xl={4}>
        <Avatar
          src={headshot}
          alt='headshot'
          className={classes.image}
        />
      </Grid>
    </Grid>
  );
}