import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typography, Avatar, List, ListItem, Icon, Link, Zoom, Fade } from '@mui/material';
import Footer from '../Footer';
import { useAboutStyles } from './about-styles';
import about from '../../db/about.json';

export const About: React.FC = () => {
  const classes: any = useAboutStyles();
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
            className={classes.name}
            alt='name'
            src={require(`../../${about['name-gif-path']}`)}
          />
        </Zoom>
        <div className={classes.linksBox}>
          <List className={classes.linksList}>
            {about.links.map((link, lIndex) => (
              <Fade key={lIndex} in={true} style={{transitionDelay: `${transitionDelay * lIndex}ms`}}>
                <ListItem>
                  <Icon>
                    <img className={classes.icon} alt='icon' src={require(`../../${link['icon-path']}`)} />
                  </Icon>
                  {link.ref ? (
                    <Link href={link.ref} target='_blank' underline='none'>
                      <div className={classes.linkText}>&nbsp;{link.value}</div>
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
