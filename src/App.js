import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Connect from './components/Connect/Connect';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

export default class App extends React.Component {
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
      <div className="App">
        <Navbar scrolledNav={this.state.isScrolledNav} />
        <Landing />
        <About />
        <Connect />
        <Projects />
        <Footer />
      </div>
    );
  }
}