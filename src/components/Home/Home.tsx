import React from 'react';
import { Zoom } from '@mui/material';
import { useHomeStyles } from './home-styles';
import name from '../../assets/gifs/justin-jitter.gif';

export const Home: React.FC = () => {
  const classes: any = useHomeStyles();

  return (
    <div className={classes.container}>
      <Zoom in={true}>
        <img
          className={classes.name}
          src={name}
          alt='name'
        />
      </Zoom>
    </div>
  );
}
