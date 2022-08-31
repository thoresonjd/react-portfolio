import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import { 
  Navbar,
  Home,
  Education,
  Experience,
  Projects,
  About,
  Particles,
  NotFound,
  Footer
} from './components';
import { theme } from './theme'
import './App.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Justin Thoreson</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/education' element={<Education />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
        <Particles />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
