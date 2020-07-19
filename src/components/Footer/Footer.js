import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="my-5 pt-5 pb-3 text-center">
        <p>
          <a className="footer-icon" target="_blank" href="https://github.com/tarkowr"><i className="fa fa-github"> </i></a>
          <a className="footer-icon" target="_blank" href="https://www.linkedin.com/in/richie-tarkowski-273238155"><i className="fa fa-linkedin-square"> </i></a>
          <a className="footer-icon" target="_blank" href="https://trailhead.com/me/rtarkowski"><i className="fa fa-cloud"> </i></a>
        </p>
        <p className="footer-email mt-4">You can reach me a<span> <a href="mailto:tarkowr@gmail.com">tarkowr@gmail.com</a> </span></p>
      </div> 
    );
  }
}
