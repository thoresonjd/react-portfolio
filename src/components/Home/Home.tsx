import React from 'react';
import Typed from 'react-typed';
import { Avatar, Typography, Slide } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { useHomeStyles } from './home-styles';
import avatar from '../../assets/images/alien.jpg';

export const Home: React.FC = () => {
  const classes: any = useHomeStyles();

  return (
    <Slide direction='down' in={true} mountOnEnter unmountOnExit>
      <Container className={classes.container}>
        <Row className={classes.row}>
          <Col className={classes.image} md={6}>
            <Avatar
              src={avatar}
              alt='avatar'
              className={classes.avatar}
            />
          </Col>
          <Col className={classes.typedBox} md={6} >
            <Typography variant='h3' className={classes.title}>
              {'>'}&nbsp;
              <Typed
                strings={[
                  'Justin Thoreson',
                  'Exulgor'
                ]}
                typeSpeed={50}
                backSpeed={60}
                loop
              />     
            </Typography>
            <Typography variant='h4' className={classes.subtitle}>
              {'>'}&nbsp;&nbsp;
              <Typed
                strings={[
                  'Student',
                  'Developer',
                  'Nerd',
                  'Alien'
                ]}
                typeSpeed={50}
                backSpeed={60}
                loop
              />     
            </Typography>
          </Col>
        </Row>
      </Container>
    </Slide>
  );
}
