import React from 'react';
import Typed from 'react-typed';
import './Landing.css';

export default class Landing extends React.Component {
  name = <div className="name">Richie Tarkowski</div>;
  title = (
    <div className="title px-2">
      <Typed strings={['Studying Information Systems', 'Hagerty Software Engineer Intern']}
        typeSpeed={15} 
        startDelay={0}
        autoInsertCss={true}
        fadeOut={false}
        backDelay={2500}
        loop={true} />
    </div>);

  render() {
    return (
      <div className="Landing w-100 bg-dark text-center text-white">
        { this.name }
        { this.title }
      </div>
    );
  }
}