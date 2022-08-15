import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { Particles } from './components/Particles';
import { Navbar } from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
      <Particles />
    </>
  );
}

export default App;
