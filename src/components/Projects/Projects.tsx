import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import { 
  Timeline, 
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';
import { useProjectsStyles } from './projects-styles'; 
import projects from '../../db/projects.json';

export const Projects: React.FC = () => {
  const classes: any = useProjectsStyles();

  return (
    <Timeline className={classes.projectsTimeline} position='alternate'>
      {projects.map((proj, pIndex) => (
        <TimelineItem key={pIndex}>
          <TimelineOppositeContent className={classes.content}>
            <Typography className={classes.timeFrame}>
              {proj.from} - {proj.to}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector className={classes.timelineConnector} />
            <TimelineDot className={classes.timelineDot}>
              <BuildIcon className={classes.icon} fontSize='large' />
            </TimelineDot>
            <TimelineConnector className={classes.timelineConnector} />
          </TimelineSeparator>
          <TimelineContent className={classes.content}>
            <Card className={pIndex % 2 === 0 ? classes.projectsCardRHS : classes.projectsCardLHS}>
              <CardContent>
                <Typography>{proj.title}</Typography>
                <Typography>{proj.for}</Typography>
                {proj['bullet-points'].map((bullet, bIndex) => (
                  <Typography key={bIndex}>{bullet}</Typography>
                ))}
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
