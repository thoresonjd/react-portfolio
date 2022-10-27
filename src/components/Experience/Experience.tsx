import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, Typography, Zoom } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import { 
  Timeline, 
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@mui/lab';
import { useExperienceStyles } from './experience-styles'; 
import experience from '../../db/experience.json';

export const Experience: React.FC = () => {
  const classes: any = useExperienceStyles();
  const transitionDelay: number = 50;

  return (
    <>
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <Typography variant='h4' className={classes.title}>
        Experience
      </Typography>
      <Timeline className={classes.experienceTimeline}>
        {experience.map((exp, eIndex) => (
          <Zoom key={eIndex} in={true} style={{transitionDelay: `${transitionDelay * eIndex}ms`}}>
            <TimelineItem className={classes.timelineItem}>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot}>
                  <WorkIcon className={classes.icon} fontSize='large' />
                </TimelineDot>
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.content}>
                <Card className={classes.experienceCard}>
                  <CardContent>
                    <Typography className={classes.experienceTimeframe}>{exp.from} - {exp.to}</Typography>
                    <Typography className={classes.experienceHeaderText}>{exp.position}</Typography>
                    <Typography className={classes.experienceHeaderText}>{exp.employer}</Typography>
                    {/* <Typography className={classes.experienceHeaderText}>{exp.type}</Typography> */}
                    {exp['bullet-points'].map((bullet, bIndex) => (
                      <span key={bIndex} style={{display: 'flex'}}>
                        <Typography className={classes.experienceBodyText}>•&nbsp;</Typography>
                        <Typography className={classes.experienceBodyText}>{bullet}</Typography>
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
