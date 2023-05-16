import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as NavigationBar, Nav, Container } from 'react-bootstrap';
import { useStyles } from '../../theme';
import routes from './routes.json';
import brand from '../../assets/images/exulgor-drawing.png';

export const Navbar: React.FC = (): JSX.Element => {
	const classes: any = useStyles();

	return (
		<NavigationBar className={classes.navbar} expand='lg'>
			<Container>
				<NavigationBar.Brand>
					<img className={classes.brand} src={brand} alt='brand' />
				</NavigationBar.Brand>
				<NavigationBar.Toggle className={classes.navbarToggler} aria-controls='basic-navbar-nav'>
					<span></span>
					<span></span>
				</NavigationBar.Toggle>
				<NavigationBar.Collapse id='basic-navbar-nav'>
					<Nav style={{ margin: 'auto' }}>
						{routes.map((route: any, rIndex: number) => (
							<Nav.Item style={{ margin: 'auto' }} key={rIndex}>
								<Nav.Link as={Link} to={route.to}>
									<button className={classes.button}>{route.name}</button>
								</Nav.Link>
							</Nav.Item>
						))}
					</Nav>
				</NavigationBar.Collapse>
			</Container>
		</NavigationBar>
	);
};
