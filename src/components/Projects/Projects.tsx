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
  TimelineContent
} from '@mui/lab';
import { useProjectsStyles } from './projects-styles'; 
import projects from '../../db/projects.json';

export const Projects: React.FC = () => {
  const classes: any = useProjectsStyles();
  const transitionDelay: number = 50;

  return (
    <>
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Typography variant='h4' className={classes.title}>
        Projects
      </Typography>
      <Timeline className={classes.projectsTimeline}>
        {projects.map((proj, pIndex) => (
          <Zoom key={pIndex} in={true} style={{transitionDelay: `${transitionDelay * pIndex}ms`}}>
            <TimelineItem className={classes.timelineItem}>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot}>
                  <BuildIcon className={classes.icon} fontSize='large' />
                </TimelineDot>
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.projectContent}>
                <Card className={classes.projectCard}>
                  <CardContent>
                    <Typography className={classes.projectTimeframe}>
                      {proj.from === proj.to ? '' : `${proj.from} -`} {proj.to}
                    </Typography>                
                    {proj.ref ? (
                      <span style={{display: 'flex'}}>
                        <LinkIcon fontSize='small'/>&nbsp;
                        <Link href={proj.ref} target='_blank' underline='none'>
                          <Typography className={classes.linkText}>
                            {proj.title}
                          </Typography>
                        </Link>
                      </span>                    
                    ) : (
                      <Typography className={classes.projectHeaderText}>{proj.title}</Typography>
                    )}                            
                    {proj['bullet-points'].map((bullet, bIndex) => (
                      <span key={bIndex} style={{display: 'flex'}}>
                        <Typography className={classes.projectBodyText}>•&nbsp;</Typography>
                        <Typography className={classes.projectBodyText}>{bullet}</Typography>
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
