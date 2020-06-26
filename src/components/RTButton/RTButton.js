import React from 'react';
import './RTButton.css';

export default class RTButton extends React.Component {
  render() {
    return (
        <a className="RTButton" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Return Home
        </a>
    );
  }
}
