import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    );
  }
}