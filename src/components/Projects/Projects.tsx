import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, Typography, Link, Zoom } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import LinkIcon from '@mui/icons-material/Link';
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
  const transitionDelay = 50;

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Timeline className={classes.projectsTimeline} position='alternate'>
        {projects.map((proj, pIndex) => (
          <Zoom key={pIndex} in={true} style={{transitionDelay: `${transitionDelay * pIndex}ms`}}>
            <TimelineItem>
              <TimelineOppositeContent className={classes.content}>
                <Typography className={classes.timeFrame}>
                  {proj.from === proj.to ? '' : `${proj.from} -`} {proj.to}
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
                    {proj.ref ? (
                      <Link href={proj.ref} underline='none'>
                        <Typography className={classes.linkText}>
                          {proj.title}&nbsp;
                          <LinkIcon fontSize='small'/>
                        </Typography>
                      </Link>
                    ) : (
                      <Typography>{proj.title}</Typography>
                    )}
                    {proj['bullet-points'].map((bullet, bIndex) => (
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
