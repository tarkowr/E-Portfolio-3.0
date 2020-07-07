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
  maxScroll = 100;

  state = {
    isScrolledNav: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    let scroll = window.pageYOffset;

    if (!this.state.isScrolledNav && scroll > this.maxScroll) {
      this.setState({
        isScrolledNav: true
      });
    } 
    else if (this.state.isScrolledNav && scroll <= this.maxScroll) {
      this.setState({
        isScrolledNav: false
      });
    }
  }

  render() {
    return (
      <div>
        <Navbar scrolledNav={this.state.isScrolledNav} />
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    );
  }
}