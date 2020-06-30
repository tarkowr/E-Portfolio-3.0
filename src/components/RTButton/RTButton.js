import React from 'react';
import PropTypes from 'prop-types';
import './RTButton.css';

export default class RTButton extends React.Component {
  render() {
    return (
        <a className="RTButton" href={this.props.href}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            { this.props.label }
        </a>
    );
  }
}

RTButton.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string
}
