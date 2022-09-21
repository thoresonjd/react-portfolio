import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typography, Avatar, List, ListItem, Icon, Link, Slide } from '@mui/material';
import Footer from '../Footer';
import { useAboutStyles } from './about-styles';
import about from '../../db/about.json';

export const About: React.FC = () => {
  const classes: any = useAboutStyles();

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Slide direction='down' in={true} mountOnEnter unmountOnExit>
        <div className={classes.aboutBox}>
          <Avatar
            src={require(`../../${about['avatar-path']}`)}
            alt='avatar'
            className={classes.image}
          />
          <img
            className={classes.name}
            alt='name'
            src={require(`../../${about['name-gif-path']}`)}
          />
          <div className={classes.linksBox}>
            <List className={classes.linksList}>
              {about.links.map((link, lIndex) => (
                <ListItem key={lIndex}>
                  <Icon>
                    <img className={classes.icon} alt='icon' src={require(`../../${link['icon-path']}`)} />
                  </Icon>
                  {link.ref ? (
                    <Link href={link.ref} underline='none'>
                      <div className={classes.linkText}>&nbsp;{link.value}</div>
                    </Link>
                  ):(
                    <Typography>&nbsp;{link.value}</Typography>
                  )}
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </Slide>
      <Footer />
    </>
  );
}
