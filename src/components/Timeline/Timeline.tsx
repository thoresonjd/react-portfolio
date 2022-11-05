import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, Typography, Zoom } from '@mui/material';
import { 
  Timeline as TimelineMUI, 
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent
} from '@mui/lab';
import { useStyles } from '../../theme';

interface Props {
  title: string,
  data: Array<any>,
  icon: any,
  element: any
}

export const Timeline: React.FC<Props> = (props) => {
  const classes: any = useStyles();
  const transitionDelay: number = 50;

  return (
    <>
      <Helmet>
        <title>Experience</title>
      </Helmet>
      <Typography className={classes.timelineTitle} variant='h4'>
        {props.title}
      </Typography>
      <TimelineMUI className={classes.timeline}>
        {props.data.map((timelineItem: any, tIndex: number) => (
          <Zoom key={tIndex} in={true} style={{ transitionDelay: `${transitionDelay * tIndex}ms` }}>
            <TimelineItem className={classes.timelineItem}>
              <TimelineSeparator>
                <TimelineDot className={classes.timelineDot}>
                  <props.icon className={classes.timelineIcon} />
                </TimelineDot>
                <TimelineConnector className={classes.timelineConnector} />
              </TimelineSeparator>
              <TimelineContent className={classes.timelineItemContent}>
                <Card className={classes.timelineItemCard}>
                  <CardContent>
                    {props.element(timelineItem)}
                  </CardContent>
                </Card>
              </TimelineContent>
            </TimelineItem>
          </Zoom>
        ))}
      </TimelineMUI>
    </>
  );
}
