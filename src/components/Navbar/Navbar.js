import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  maxScroll = 100;
  minWidth = 992;

  state = {
    isScrolledNav: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    let width = window.innerWidth;
    if ((width >= this.minWidth && this.state.width < this.minWidth) || (width < this.minWidth && this.state.width >= this.minWidth)){
      this.setState({ width: window.innerWidth });
    }
  }

  handleScroll = (e) => {
    let scroll = window.pageYOffset;

    if (!this.state.isScrolledNav && scroll > this.maxScroll) {
      this.setState({ isScrolledNav: true });
    } 
    else if (this.state.isScrolledNav && scroll <= this.maxScroll) {
      this.setState({ isScrolledNav: false });
    }
  }

  buildMobileNav() {
    return (
      <div className="Navbar scrolled-nav w-100 text-left">
        <div className="p-3 nav-name">Richie Tarkowski</div>
      </div>
    );
  }

  buildDesktopNav() {
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

  render() {
    return this.state.width < this.minWidth ? this.buildMobileNav() : this.buildDesktopNav();
  }
}
