import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as NavigationBar, Nav, Container } from 'react-bootstrap';
import { useNavbarStyles } from './navbar-styles';

export const Navbar: React.FC = () => {
  const classes: any = useNavbarStyles();

  return (
    <NavigationBar className={classes.navbar} expand='lg'>
      <Container>
        <NavigationBar.Brand href="/" className="d-flex">
          <img
            src={require('../../assets/gifs/exulgor-jitter.gif')}
            className={classes.image}
            alt="brand"
          />
        </NavigationBar.Brand>
        <NavigationBar.Toggle className={classes.navbarToggler} aria-controls='basic-navbar-nav'>
          <span></span>
          <span></span>
        </NavigationBar.Toggle>
        <NavigationBar.Collapse id='basic-navbar-nav'>
          <Nav className={classes.toolbar}>
            <Nav.Item className={classes.navItem}>
              <Nav.Link as={Link} to='/'>
                <button className={classes.button}>Home</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.navItem}>
              <Nav.Link as={Link} to='/education'>
                <button className={classes.button}>Education</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.navItem}>
              <Nav.Link as={Link} to='/experience'>
                <button className={classes.button}>Experience</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.navItem}>
              <Nav.Link as={Link} to='/projects'>
                <button className={classes.button}>Projects</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.navItem}>
              <Nav.Link as={Link} to='/resume'>
                <button className={classes.button}>Resume</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.navItem}>
              <Nav.Link as={Link} to='/music'>
                <button className={classes.button}>Music</button>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={classes.navItem}>
              <Nav.Link as={Link} to='/about'>
                <button className={classes.button}>About</button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  );
}
