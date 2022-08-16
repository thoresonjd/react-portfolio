import React from 'react';
import { Box, Grid, Avatar, Typography } from '@mui/material';
import Typed from 'react-typed';
import { makeStyles } from '@mui/styles';
import { colors } from '../theme';
import headshot from '../assets/SU_ID.jpg';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'consolas'
  },
  subtitle: {
    color: colors.Green,
    textTransform: 'uppercase',
    fontFamily: 'consolas'
  },
  outerGrid: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    justifyContent: 'center'
  },
  typedBox: {
    color: colors.Lime,
    margin: 'auto auto'
  },
  image: {
    height: '400px !important',
    width: '400px !important',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

export const Home: React.FC = () => {
  const classes = useStyles();

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
