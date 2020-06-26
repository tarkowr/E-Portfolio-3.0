import React from 'react';
import './Error.css';
import RTButton from '../RTButton/RTButton';

export default class Error extends React.Component {
  render() {
    return (
      <div className="h-100 w-100 bg-dark text-center">
        <div className="pt-5 w-100">
          <div className="m-auto text-white">
            <div className="mt-5 display-1">
              404
            </div>
            <div className="mt-4 h5">
              The requested content is not available.
            </div>
            <div className="mt-5">
              <RTButton />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
