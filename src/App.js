import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Connect from './components/Connect/Connect';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Connect />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
