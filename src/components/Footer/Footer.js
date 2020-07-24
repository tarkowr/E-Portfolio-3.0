import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="my-5 pt-4 pb-5 text-center">
        <a className="footer-icon mx-2" target="_blank" rel="noopener noreferrer" href="https://github.com/tarkowr"><i className="fa fa-github"> </i></a>
        <a className="footer-icon mx-2" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/richie-tarkowski-273238155"><i className="fa fa-linkedin-square"> </i></a>
        <a className="footer-icon mx-2" target="_blank" rel="noopener noreferrer" href="https://trailhead.com/me/rtarkowski"><i className="fa fa-cloud"> </i></a>
        <div className="footer-email mt-4">You can reach me at<span> <a href="mailto:tarkowr@gmail.com">tarkowr@gmail.com</a> </span></div>
      </div> 
    );
  }
}
