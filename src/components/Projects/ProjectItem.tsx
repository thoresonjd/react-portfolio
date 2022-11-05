import React from 'react'
import { Typography, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Bullet from '../Bullet';
import { useTimelineStyles } from '../../styles/timeline-styles';

interface Props {
  projectItem: any
}

export const ProjectItem: React.FC<Props> = (props) => {
  const classes = useTimelineStyles();

  return (
    <>
      <Typography className={classes.timelineItemTimeframe}>
        {props.projectItem.from === props.projectItem.to ? '' : `${props.projectItem.from} -`} {props.projectItem.to}
      </Typography>                
      {props.projectItem.ref ? (
        <span style={{display: 'flex'}}>
          <LinkIcon fontSize='small'/>&nbsp;
          <Link href={props.projectItem.ref} target='_blank' underline='none'>
            <Typography className={classes.timelineItemLinkText}>
              {props.projectItem.title}
            </Typography>
          </Link>
        </span>                    
      ) : (
        <Typography className={classes.timelineItemHeader}>{props.projectItem.title}</Typography>
      )}                            
      <Bullet points={props.projectItem['bullet-points']} />
    </>
  )
}
