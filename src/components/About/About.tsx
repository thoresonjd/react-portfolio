import React from 'react';
import { Box, Typography, Avatar, Card, List, ListItem, Icon, Link } from '@mui/material';
import { useAboutStyles } from './about-styles';
import about from '../../db/about.json';

export const About: React.FC = () => {
  const classes = useAboutStyles();
  
  return (
    <Box className={classes.aboutBox}>
      <Avatar
        src={require(`../../${about['image-path']}`)}
        alt='headshot'
        className={classes.image}
      />
      <Typography className={classes.title} variant='h4'>{about.name}</Typography>
      <Card className={classes.informationBox}>
        <List className={classes.links}>
          {about.links.map((link, lIndex) => (
            <ListItem key={lIndex}>
              <Icon>
                <img className={classes.icon} alt='icon' src={require(`../../${link['icon-path']}`)} />
              </Icon>
              {link.ref ? (
                <Link href={link.ref} underline='none'>
                  <Typography className={classes.linkText}>&nbsp;{link.value}</Typography>
                </Link>
              ):(
                <Typography>&nbsp;{link.value}</Typography>
              )}
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
}
