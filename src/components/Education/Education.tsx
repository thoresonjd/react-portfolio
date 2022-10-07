import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardMedia, Typography, Zoom } from '@mui/material';
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
  const transitionDelay: number = 50;

  return (
    <>
      <Helmet>
        <title>Education</title>
      </Helmet>
      <Typography variant='h4' className={classes.title}>
        education
      </Typography>
      <Timeline className={classes.educationTimeline} position='alternate'>
        {education.map((edu, eIndex) => (
          <Zoom key={eIndex} in={true} style={{transitionDelay: `${transitionDelay * eIndex}ms`}}>
            <TimelineItem>
              <TimelineOppositeContent className={classes.content}>
                <Typography className={classes.timeFrame}>
                  {`${edu.from} - ${edu.to}`}
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
                    <Typography className={classes.educationHeaderText}>{edu.institution}</Typography>
                    <Typography className={classes.educationHeaderText}>{edu.degree}</Typography>
                    {edu.majors.length > 0 ? (
                      <Typography className={classes.educationBodyText}>
                        Major(s): {edu.majors.join(', ')}
                      </Typography>
                    ) :<></>}
                    {edu.minors.length > 0 ? (
                      <Typography className={classes.educationBodyText}>
                        Minor(s): {edu.minors.join(', ')}
                      </Typography>
                    ) : <></>}
                    {edu.gpa ? (
                      <Typography className={classes.educationBodyText}>
                        GPA: {edu.gpa}
                      </Typography>
                    ) : <></>}
                    {edu.honors !== '' ? (
                      <Typography className={classes.educationBodyText}>
                        Honors: {edu.honors}
                      </Typography>
                    ) : <></>}
                    {edu['bullet-points'].map((bullet, bIndex) => (
                      <span key={bIndex} style={{display: 'flex'}}>
                        <Typography className={classes.educationBodyText}>•&nbsp;</Typography>
                        <Typography className={classes.educationBodyText}>{bullet}</Typography>
                      </span>
                    ))}
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          </Zoom>
        ))}
      </Timeline>
    </>
  );
}
