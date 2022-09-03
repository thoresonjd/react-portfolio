import React from 'react';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';
import { useMusicStyles } from './music-styles';

export const Music: React.FC = () => {
  const classes = useMusicStyles();

  return (
    <>
      <Helmet>
        <title>Music</title>
      </Helmet>
      <Container>
        <Typography className={classes.title} variant='h4'>
          Listen to some of my music! :)
        </Typography>
        <ReactPlayer
          className={classes.audioPlayer}
          playing
          loop
          url='https://soundcloud.com/exulgor/primordial'
          />
      </Container>
    </>
  );
}
