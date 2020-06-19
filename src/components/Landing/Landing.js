import React from 'react';
import PropTypes from 'prop-types';
import './Landing.css';

const name = <div className="name">Richie Tarkowski</div>;
const title = <div className="title px-2">Studying Information Systems</div>;

const Landing = () => (
  <div className="Landing w-100 bg-dark text-center text-white pt-5">
    <div className="mt-5">
    { name }
    { title }
    </div>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
