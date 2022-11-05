import React from 'react'
import { Typography } from '@mui/material';
import Bullet from '../Bullet';
import { useTimelineStyles } from '../../styles/timeline-styles';

interface Props {
  educationItem: any
}

export const EducationItem: React.FC<Props> = (props) => {
  const classes = useTimelineStyles();

  return (
    <>
      <Typography className={classes.timelineItemTimeframe}>
        {`${props.educationItem.from} - ${props.educationItem.to}`}
      </Typography>
      <Typography className={classes.timelineItemHeader}>{props.educationItem.institution}</Typography>
      <Typography className={classes.timelineItemHeader}>{props.educationItem.degree}</Typography>
      {props.educationItem.majors.length > 0 ? (
        <Typography className={classes.timelineBodyText}>
          Major(s): {props.educationItem.majors.join(', ')}
        </Typography>
      ) : <></>}
      {props.educationItem.minors.length > 0 ? (
        <Typography className={classes.timelineBodyText}>
          Minor(s): {props.educationItem.minors.join(', ')}
        </Typography>
      ) : <></>}
      {props.educationItem.gpa ? (
        <Typography className={classes.timelineBodyText}>
          GPA: {props.educationItem.gpa}
        </Typography>
      ) : <></>}
      <Bullet points={props.educationItem['bullet-points']} />
    </>
  );
}
