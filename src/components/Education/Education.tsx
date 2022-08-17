import React from 'react';
import { Card } from '@mui/material';
import { 
  Timeline, 
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@mui/lab';
import { useEducationStyles } from './education-styles'; 

export const Education: React.FC = () => {
  const classes = useEducationStyles();

  return (
    <Timeline className={classes.educationTimeline}>
      <TimelineItem className={classes.educationItem}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card>Eat</Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.educationItem}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Card>Code</Card>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={classes.educationItem}>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Card>Sleep</Card>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
