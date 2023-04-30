import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typography, Avatar, List, ListItem, Icon, Link, Zoom, Fade } from '@mui/material';
import { useStyles } from '../../theme';
import about from '../../db/about.json';

export const About: React.FC = (): JSX.Element => {
  const classes: any = useStyles();
  const transitionDelay: number = 50;

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className={classes.aboutBox}>
        <Zoom in={true}>
          <Avatar
            src={require(`../../${about['avatar-path']}`)}
            alt='avatar'
            className={classes.avatar}
          />
        </Zoom>
        <Zoom in={true}>
          <img
            className={classes.aboutName}
            alt='name'
            src={require(`../../${about['name-gif-path']}`)}
          />
        </Zoom>
        <div className={classes.linksBox}>
          <List className={classes.linksList}>
            {about.links.map((link: any, lIndex: number) => (
              <Fade key={lIndex} in={true} style={{transitionDelay: `${transitionDelay * lIndex}ms`}}>
                <ListItem>
                  <Icon>
                    <img className={classes.linkIcon} alt='icon' src={require(`../../${link['icon-path']}`)} />
                  </Icon>
                  {link.ref ? (
                    <Link href={link.ref} target='_blank' underline='none'>
                      <div className={classes.aboutLinkText}>&nbsp;{link.value}</div>
                    </Link>
                  ):(
                    <Typography>&nbsp;{link.value}</Typography>
                  )}
                </ListItem>
              </Fade>
            ))}
          </List>
        </div>
      </div>
    </>
  );
}
