import React from 'react';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div id="about-component" className="About scaled-py-5">
        <div className="scaled-my-5 text-center">
          <div className="h1">&mdash; About Me &mdash;</div>
          <div className="row mx-0">
            <div className="text-justify m-auto pt-4 col-12 col-md-10 col-xl-8 px-4 description">
                Hey, my name is Richie Tarkowski, and I'm a Software Engineer living in the great land of central Illinois! I really enjoy building user experiences, such as mobile apps and websites, though I have an interest in tech and software dev in general. I have experience in Flutter, React, Angular, and ASP.NET.
                <br /> <br />
                I should also mention that the most important thing about me is my faith in Christ. He has transformed my life and my trust is in Him <span className='heart'> ♡ </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}