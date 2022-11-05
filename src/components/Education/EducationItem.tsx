import React from 'react'
import { Typography } from '@mui/material';
import Bullet from '../Bullet';
import { useEducationStyles } from './education-styles';

interface Props {
  educationItem: any
}

export const EducationItem: React.FC<Props> = (props) => {
  const classes = useEducationStyles();

  return (
    <>
      <Typography className={classes.educationTimeframe}>
        {`${props.educationItem.from} - ${props.educationItem.to}`}
      </Typography>
      <Typography className={classes.educationHeaderText}>{props.educationItem.institution}</Typography>
      <Typography className={classes.educationHeaderText}>{props.educationItem.degree}</Typography>
      {props.educationItem.majors.length > 0 ? (
        <Typography className={classes.educationBodyText}>
          Major(s): {props.educationItem.majors.join(', ')}
        </Typography>
      ) : <></>}
      {props.educationItem.minors.length > 0 ? (
        <Typography className={classes.educationBodyText}>
          Minor(s): {props.educationItem.minors.join(', ')}
        </Typography>
      ) : <></>}
      {props.educationItem.gpa ? (
        <Typography className={classes.educationBodyText}>
          GPA: {props.educationItem.gpa}
        </Typography>
      ) : <></>}
      <Bullet points={props.educationItem['bullet-points']} />
    </>
  );
}
