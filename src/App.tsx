import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material';
import { Router, Footer, Particles } from './components';
import { theme } from './theme';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = (): JSX.Element => {
	return (
		<HelmetProvider>
			<ThemeProvider theme={theme}>
				<Router />
				<Footer />
				<Particles />
			</ThemeProvider>
		</HelmetProvider>
	);
};

export default App;
