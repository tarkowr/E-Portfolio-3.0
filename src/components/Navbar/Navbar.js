import React from 'react';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth };
  }

  maxScroll = 100;
  minWidth = 992;

  state = {
    isScrolledNav: false
  }

  // Handle resize window event.
  handleResize = () => {
    let width = window.innerWidth;

    if ((width >= this.minWidth && this.state.width < this.minWidth) || (width < this.minWidth && this.state.width >= this.minWidth)){
      this.setState({ width: window.innerWidth });
    }
  }

  // Handle window scroll event.
  handleScroll = () => {
    let scroll = window.pageYOffset;

    if (!this.state.isScrolledNav && scroll > this.maxScroll) {
      this.setState({ isScrolledNav: true });
    } 
    else if (this.state.isScrolledNav && scroll <= this.maxScroll) {
      this.setState({ isScrolledNav: false });
    }
  }

  // Build the navbar for mobile users.
  buildMobileNav() {
    return (
      <nav className="navbar fixed-top navbar-light bg-light border-bottom">
        <a className="navbar-brand" href="/">Richie Tarkowski</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <a className="nav-link" href="#about-component">About</a>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <a className="nav-link" href="#experience-component">Experience</a>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <a className="nav-link" href="#projects-component">Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

  // Build the navbar for desktop users.
  buildDesktopNav() {
    let navClass = this.state.isScrolledNav ? 'scrolled-nav' : 'landing-nav';

    return (
      <div className={`custom-navbar ${navClass} text-white text-center w-100`}>
        <i className="fa fa-bars d-none" id="nav-bars"> </i>
        <a href="#about-component" className="custom-nav-link">About Me</a>
        <a href="#experience-component" className="custom-nav-link">Experience</a>
        <a href="#projects-component" className="custom-nav-link">Projects</a>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return this.state.width < this.minWidth ? this.buildMobileNav() : this.buildDesktopNav();
  }
}
