import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { 
  Navbar,
  Home,
  Education,
  Experience,
  Projects,
  Resume,
  Music,
  About,
  Footer,
  NotFound,
  Particles
} from './components';
import { theme } from './theme'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Route path='/resume' element={<Resume />} />
            <Route path='/music' element={<Music />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
        <Footer />
        <Particles />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
