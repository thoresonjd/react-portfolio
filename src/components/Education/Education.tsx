import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { 
  Timeline, 
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';
import { useEducationStyles } from './education-styles'; 
import education from '../../db/education.json';

export const Education: React.FC = () => {
  const classes: any = useEducationStyles();

  return (
    <>
      <Helmet>
        <title>Education</title>
      </Helmet>
      <Timeline className={classes.educationTimeline} position='alternate'>
        {education.map((edu, eIndex) => (
          <TimelineItem key={eIndex}>
            <TimelineOppositeContent className={classes.content}>
              <Typography className={classes.timeFrame}>
                {edu.graduated ? 'Graduated' : `${edu.from} -`} {edu.to}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector className={classes.timelineConnector} />
              <TimelineDot className={classes.timelineDot}>
                <SchoolIcon className={classes.icon} fontSize='large' />
              </TimelineDot>
              <TimelineConnector className={classes.timelineConnector} />
            </TimelineSeparator>
            <TimelineContent className={classes.content}>
              <Card className={eIndex % 2 === 0 ? classes.educationCardRHS : classes.educationCardLHS}>
                <CardMedia
                  className={classes.image}
                  component='img'
                  image={require(`../../${edu['image-path']}`)}
                  alt='education'
                />
                <CardContent>
                  <Typography>{edu.institution}</Typography>
                  <Typography>{edu.degree}</Typography>
                  {edu.majors.length > 0 ? (<Typography>Major(s): {edu.majors.join(', ')}</Typography>) : <></>}
                  {edu.minors.length > 0 ? (<Typography>Minor(s): {edu.minors.join(', ')}</Typography>) : <></>}
                  {edu.gpa ? (<Typography>GPA: {edu.gpa}</Typography>) : <></>}
                  {edu.honors !== '' ? (<Typography>Honors: {edu.honors}</Typography>) : <></>}
                  {edu['bullet-points'].map((bullet, bIndex) => (
                    <Typography key={bIndex}>{`• ${bullet}`}</Typography>
                  ))}
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
}
