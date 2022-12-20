import React from 'react';
import { Typography } from '@mui/material';
import Bullet from '../Bullet';
import { useStyles } from '../../theme';

interface Props {
  experienceItem: any
}

export const ExperienceItem: React.FC<Props> = (props) => {
  const classes: any = useStyles();

  return (
    <>
      <Typography className={classes.timelineItemTimeframe}>{props.experienceItem.from} - {props.experienceItem.to}</Typography>
      <Typography className={classes.itemHeader}>{props.experienceItem.position}</Typography>
      <Typography className={classes.itemHeader}>{props.experienceItem.employer}</Typography>
      <Bullet points={props.experienceItem['bullet-points']} />
    </>
  );
}
