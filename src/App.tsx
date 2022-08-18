import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material';
import { 
  Navbar,
  Home,
  Education,
  Experience,
  Projects,
  About,
  Particles
} from './components';
import { theme } from './theme'
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/education' element={<Education />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </ThemeProvider>
      </Router>
      <Particles />
    </>
  );
}

export default App;
