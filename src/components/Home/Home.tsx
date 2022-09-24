import React from 'react';
import Typed from 'react-typed';
import { Avatar, Typography, Zoom } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { useHomeStyles } from './home-styles';
import avatar from '../../assets/images/alien.jpg';

export const Home: React.FC = () => {
  const classes: any = useHomeStyles();

  return (
    <Container className={classes.container}>
      <Row className={classes.row}>
        <Col className={classes.image} md={6}>
          <Zoom in={true} mountOnEnter unmountOnExit>
            <Avatar
              className={classes.avatar}
              src={avatar}
              alt='avatar'
            />
          </Zoom>
        </Col>
        <Col className={classes.typedBox} md={6} >
          <Typography className={classes.title} variant='h3'>
            {'>'}&nbsp;
            <Typed
              strings={[
                'Exulgor',
                'Justin'
              ]}
              typeSpeed={50}
              backSpeed={60}
              backDelay={2000}
              loop
            /> 
          </Typography>
        </Col>
      </Row>
    </Container>
  );
}
