import React from 'react'
import { Typography, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Bullet from '../Bullet';
import { useProjectsStyles } from './projects-styles'

interface Props {
  projectItem: any
}

export const ProjectItem: React.FC<Props> = (props) => {
  const classes = useProjectsStyles();

  return (
    <>
      <Typography className={classes.projectTimeframe}>
        {props.projectItem.from === props.projectItem.to ? '' : `${props.projectItem.from} -`} {props.projectItem.to}
      </Typography>                
      {props.projectItem.ref ? (
        <span className={classes.bulletPoint}>
          <LinkIcon fontSize='small'/>&nbsp;
          <Link href={props.projectItem.ref} target='_blank' underline='none'>
            <Typography className={classes.linkText}>
              {props.projectItem.title}
            </Typography>
          </Link>
        </span>                    
      ) : (
        <Typography className={classes.projectHeaderText}>{props.projectItem.title}</Typography>
      )}                            
      <Bullet points={props.projectItem['bullet-points']} />
    </>
  )
}
