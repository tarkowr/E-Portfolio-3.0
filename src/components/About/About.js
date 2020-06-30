import React from 'react';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div className="About py-5">
        <div className="my-5 text-center">
          <div className="h1">&mdash; About Me &mdash;</div>
          <div className="row mx-0">
            <div className="text-justify m-auto pt-5 col-12 col-md-10 col-xl-8 px-5 description">
                My name is Richie Tarkowski, and I am a third-year student at Ferris State University. I am pursuing a degree in Computer Information Systems with a minor in Information Security and Intelligence. I currently work at Hagerty as a Software Engineer Intern. Post-education, my goal is to apply my knowledge of CIS and ISIN to design and develop applications. I have experience in Python, Java, and C# from my classes at Ferris and projects of my own. I've also built websites with several frameworks including Angular, ASP.NET MVC, and Django, and written server-side scripts with NodeJS and PHP. In my free time, I enjoy reading, exercising, investing, and learning.
            </div>
          </div>
          <div className="mt-5">
            <a href="/"><button className="custom-btn">View Resume</button></a>
          </div>
        </div>
      </div>
    );
  }
}