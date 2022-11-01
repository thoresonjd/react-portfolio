import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, Typography, Zoom } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { 
  Timeline, 
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
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
      <Timeline className={classes.educationTimeline}>
        {education.map((edu, eIndex) => (
          <Zoom key={eIndex} in={true} style={{transitionDelay: `${transitionDelay * eIndex}ms`}}>
            <TimelineItem className={classes.timelineItem}>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot}>
                  <SchoolIcon className={classes.icon} fontSize='large' />
                </TimelineDot>
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.educationContent}>
                <Card className={classes.educationCard}>
                  <CardContent>
                    <Typography className={classes.educationTimeframe}>
                      {`${edu.from} - ${edu.to}`}
                    </Typography>
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
