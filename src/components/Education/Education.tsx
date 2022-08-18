import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
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
    <Timeline className={classes.educationTimeline} position='alternate'>
      {education.map((edu, index) => (
        <TimelineItem className={classes.educationItem}>
          <TimelineOppositeContent >
            <Typography className={classes.timeFrame}>Time frame</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector /> 
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Card className={index % 2 === 0 ? classes.educationCardRHS : classes.educationCardLHS}>
              <CardContent>
                <Typography>{edu.institution}</Typography>
                <Typography>{edu.degree}</Typography>
                <Typography>{edu.majors[0]}</Typography>
                <Typography>{edu.minors[0]}</Typography> 
                <Typography>GPA: {edu.gpa}</Typography> 
                <Typography>Honors: {edu.honors}</Typography> 
              </CardContent>
              <CardMedia
                component='img'
                image={require(`../../${edu['image-path']}`)}
                alt='education'
              />
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
    // <Timeline className={classes.educationTimeline} position='alternate'>
    //   <TimelineItem className={classes.educationItem}>
    //     <TimelineOppositeContent >
    //       <Typography className={classes.timeFrame}>Time frame</Typography>
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineConnector /> 
    //       <TimelineDot />
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent>
    //       <Card className={classes.educationCardRHS}>
    //         <CardContent>
    //           <Typography>Institution</Typography>
    //           <Typography>Degree</Typography>
    //           <Typography>Majors</Typography>
    //           <Typography>Minors</Typography> 
    //           <Typography>GPA:</Typography> 
    //           <Typography>Honors:</Typography> 
    //         </CardContent>
    //         <CardMedia
    //           component='img'
    //           image={require('../../assets/su-logo.jpg')}
    //           alt='Live from space album cover'
    //         />
    //       </Card>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem className={classes.educationItem}>
    //     <TimelineOppositeContent className={classes.opposite}>
    //       <Typography className={classes.timeFrame}>Time frame</Typography>
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineConnector />
    //       <TimelineDot />
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent>
    //       <Card className={classes.educationCardLHS}>
    //         <CardContent>Code</CardContent>
    //         <CardMedia
    //           component='img'
    //           image={require('../../assets/SU_ID.jpg')}
    //           alt='Live from space album cover'
    //         />
    //       </Card>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem className={classes.educationItem}>
    //     <TimelineOppositeContent className={classes.opposite}>
    //       <Typography className={classes.timeFrame}>Time frame</Typography>
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineConnector />
    //       <TimelineDot />
    //       <TimelineConnector /> 
    //     </TimelineSeparator>
    //     <TimelineContent>
    //       <Card className={classes.educationCardRHS}>
    //         <CardContent>Sleep</CardContent>
    //         <CardMedia
    //           component='img'
    //           image={require('../../assets/SU_ID.jpg')}
    //           alt='Live from space album cover'
    //         />
    //       </Card>
    //     </TimelineContent>
    //   </TimelineItem>
    //   <TimelineItem className={classes.educationItem}>
    //     <TimelineOppositeContent className={classes.opposite}>
    //       <Typography className={classes.timeFrame}>Time frame</Typography>
    //     </TimelineOppositeContent>
    //     <TimelineSeparator>
    //       <TimelineConnector />
    //       <TimelineDot />
    //       <TimelineConnector />
    //     </TimelineSeparator>
    //     <TimelineContent>
    //       <Card className={classes.educationCardLHS}>
    //         <CardContent>Repeat</CardContent>
    //         <CardMedia
    //           component='img'
    //           image={require('../../assets/SU_ID.jpg')}
    //           alt='Live from space album cover'
    //         />
    //       </Card>
    //     </TimelineContent>
    //   </TimelineItem>
    // </Timeline>
  )
}
