import React from 'react';
import { Box, Typography, Avatar, Card, List, ListItem, Link } from '@mui/material';
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
              <Typography>{link.title}:&nbsp;</Typography>
              {link.ref ? (
                <Link href={link.ref} underline='none'>
                  <Typography className={classes.linkText}>{link.value}</Typography>
                </Link>
              ):(
                <Typography>{link.value}</Typography>
              )}
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
}
