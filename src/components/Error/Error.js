import React from 'react';
import './Error.css';
import RTButton from '../RTButton/RTButton';

export default class Error extends React.Component {
  render() {
    return (
      <div className="h-100 d-flex text-center error-wrapper">
          <div className="w-100 justify-content-center align-self-center">
            <div className="m-auto text-white">
              <div className="display-1">
                404
              </div>
              <div className="mt-4 h5">
                The requested content is not available
              </div>
              <div className="mt-5">
                <RTButton label='Return Home' href='/' />
              </div>
            </div>
          </div>
      </div>
    );
  }
}
