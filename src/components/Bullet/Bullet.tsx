import React from 'react';
import { Typography } from '@mui/material';
import { useBulletStyles } from './bullet-styles';

interface Props {
  points: []
}

export const Bullet: React.FC<Props> = (props) => {
  const classes: any = useBulletStyles();

  return (
    <>
      {props.points.map((bullet: any, bIndex: number) => (
        <span className={classes.bulletPoint} key={bIndex}>
          <Typography className={classes.bulletText}>•&nbsp;</Typography>
          <Typography className={classes.bulletText}>{bullet}</Typography>
        </span>
      ))}
    </>
  );
}
