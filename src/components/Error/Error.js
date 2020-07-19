import React from 'react';
import './Error.css';
import RTButton from '../RTButton/RTButton';

export default class Error extends React.Component {
  render() {
    return (
      <div className="h-100 bg-dark">
        <div className="h-75 pt-4 w-100 bg-dark d-flex text-center">
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
      </div>
    );
  }
}
