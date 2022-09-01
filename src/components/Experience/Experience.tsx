import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardMedia, Typography, Zoom } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { 
  Timeline, 
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';
import { useExperienceStyles } from './experience-styles'; 
import experience from '../../db/experience.json';

export const Experience: React.FC = () => {
  const classes: any = useExperienceStyles();
  const transitionDelay = 50;

  return (
    <>
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <Timeline className={classes.experienceTimeline} position='alternate'>
        {experience.map((exp, eIndex) => (
          <Zoom in={true} style={{transitionDelay: `${transitionDelay * eIndex}ms`}}>
            <TimelineItem key={eIndex}>
              <TimelineOppositeContent className={classes.content}>
                <Typography className={classes.timeFrame}>
                  {exp.from} - {exp.to}
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector className={classes.timelineConnector} />
                <TimelineDot className={classes.timelineDot}>
                  <WorkIcon className={classes.icon} fontSize='large' />
                </TimelineDot>
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.content}>
                <Card className={eIndex % 2 === 0 ? classes.experienceCardRHS : classes.experienceCardLHS}>
                  <CardMedia
                    className={classes.image}
                    component='img'
                    image={require(`../../${exp['image-path']}`)}
                    alt='experience'
                  />
                  <CardContent>
                    <Typography>{exp.position}</Typography>
                    <Typography>{exp.employer}</Typography>
                    <Typography>{exp.type}</Typography>
                    {exp['bullet-points'].map((bullet, bIndex) => (
                      <Typography key={bIndex}>{`• ${bullet}`}</Typography>
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
