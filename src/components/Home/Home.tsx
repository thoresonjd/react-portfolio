import React from 'react';
import Typed from 'react-typed';
import { Avatar, Typography, Slide } from '@mui/material';
import { Container, Row, Col } from 'react-bootstrap';
import { useHomeStyles } from './home-styles';
import avatar from '../../assets/images/alien.jpg';

export const Home: React.FC = () => {
  const classes: any = useHomeStyles();

  return (
    <Container className={classes.container}>
      <Row className={classes.row}>
        <Col className={classes.image} md={6}>
          <Slide direction='down' in={true} mountOnEnter unmountOnExit>
            <Avatar
              src={avatar}
              alt='avatar'
              className={classes.avatar}
            />
          </Slide>
        </Col>
        <Col className={classes.typedBox} md={6} >
          <Typography variant='h3' className={classes.title}>
            {'>'}&nbsp;
            <Typed
              strings={[
                'justin',
                'exulgor'
              ]}
              typeSpeed={50}
              backSpeed={60}
              backDelay={5000}
              loop
            /> 
          </Typography>
        </Col>
      </Row>
    </Container>
  );
}
