import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
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
    let navClass = this.state.isScrolledNav ? 'scrolled-nav' : 'landing-nav';

    return (
      <div className={`Navbar ${navClass} text-white text-center w-100`}>
        <i className="fa fa-bars d-none" id="nav-bars"> </i>
        <a href="#about-component" className="nav-link">About Me</a>
        <a href="#experience-component" className="nav-link">Experience</a>
        <a href="#projects-component" className="nav-link">Projects</a>
      </div>
    );
  }
}
