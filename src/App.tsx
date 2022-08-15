import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { 
  Navbar,
  Home,
  Education,
  Experience,
  Particles
} from './components';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </Router>
      <Particles />
    </>
  );
}

export default App;
