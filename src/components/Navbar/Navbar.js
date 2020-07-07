import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.scrolledNav = props.scrolledNav;
  }

  render() {
    let navClass = this.props.scrolledNav ? 'scrolled-nav' : 'landing-nav';

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

Navbar.propTypes = {
  scrolledNav: PropTypes.bool
}
