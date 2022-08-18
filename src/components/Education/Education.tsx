import React from 'react';
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
  const classes = useEducationStyles();

  return (
    <Timeline position='alternate'>
      {education.map((edu, index) => (
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography className={classes.timeFrame}>
              {edu.graduated ? 'Graduated' : `${edu['start-date']} -`} {edu['end-date']}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector /> 
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card className={index % 2 === 0 ? classes.educationCardRHS : classes.educationCardLHS}>
              {index % 2 === 0 ? (
                <>
                  <CardContent>
                    <Typography>{edu.institution}</Typography>
                    <Typography>{edu.degree}</Typography>
                    <Typography>{edu.majors[0]}</Typography>
                    <Typography>{edu.minors[0]}</Typography> 
                    <Typography>GPA: {edu.gpa}</Typography> 
                    <Typography>Honors: {edu.honors}</Typography> 
                  </CardContent>
                  <CardMedia
                    className={classes.image}
                    component='img'
                    image={require(`../../${edu['image-path']}`)}
                    alt='education'
                  />
                </>
              ) : (
                <>
                  <CardMedia
                    className={classes.image}
                    component='img'
                    image={require(`../../${edu['image-path']}`)}
                    alt='education'
                  />
                  <CardContent>
                    <Typography>{edu.institution}</Typography>
                    <Typography>{edu.degree}</Typography>
                    <Typography>{edu.majors[0]}</Typography>
                    <Typography>{edu.minors[0]}</Typography> 
                    <Typography>GPA: {edu.gpa}</Typography> 
                    <Typography>Honors: {edu.honors}</Typography> 
                  </CardContent>
                </>
              )}
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}
