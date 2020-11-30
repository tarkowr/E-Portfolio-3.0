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
                Hey, my name is Richie Tarkowski, and I'm a senior at Ferris State University studying Information Systems and Information Security! I currently work remotely at Hagerty (Traverse City, MI) as a Software Engineer on its mobile team. I have experience in Python, Java, Dart, JavaScript, and C# from college, work, and projects of my own. I've also built websites with several frameworks and languages including Angular, React, ASP.NET MVC, NodeJS, and PHP. Thanks for checking out my website!
            </div>
          </div>
          <div className="mt-5">
            <a href="/tarkowski_resume.pdf" target="_blank" rel="noopener noreferrer"><button className="custom-btn">View Resume</button></a>
          </div>
        </div>
      </div>
    );
  }
}