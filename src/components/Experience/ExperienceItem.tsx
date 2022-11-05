import React from 'react'
import { Typography } from '@mui/material';
import Bullet from '../Bullet';
import { useExperienceStyles } from './experience-styles';

interface Props {
  experienceItem: any
}

export const ExperienceItem: React.FC<Props> = (props) => {
  const classes = useExperienceStyles();

  return (
    <>
      <Typography className={classes.experienceTimeframe}>{props.experienceItem.from} - {props.experienceItem.to}</Typography>
      <Typography className={classes.experienceHeaderText}>{props.experienceItem.position}</Typography>
      <Typography className={classes.experienceHeaderText}>{props.experienceItem.employer}</Typography>
      <Bullet points={props.experienceItem['bullet-points']} />
    </>
  );
}
