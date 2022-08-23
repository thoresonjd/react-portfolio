import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { useAboutStyles } from './about-styles';
import headshot from '../../assets/images/alien.jpg';

export const About: React.FC = () => {
  const classes = useAboutStyles();
  
  return (
    <Box className={classes.aboutBox}>
      <Avatar
        src={headshot}
        alt='headshot'
        className={classes.image}
      />
      <Typography className={classes.title} variant='h4'>Justin Thoreson</Typography>

    </Box>
  );
}
