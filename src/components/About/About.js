import React from 'react';
import './About.css';

export default class About extends React.Component {
  render() {
    return (
      <div id="about-component" className="About py-5">
        <div className="my-5 text-center">
          <div className="h1">&mdash; About Me &mdash;</div>
          <div className="row mx-0">
            <div className="text-justify m-auto pt-4 col-12 col-md-10 col-xl-8 px-4 description">
                My name is Richie Tarkowski, I am a senior at Ferris State University studying Information Systems with a minor in Information Security, and I live in  the Peoria, IL area. I currently work remotely at Hagerty (Traverse City, MI) as a Software Engineer Intern on its mobile team. Post-education, my goal is to apply my knowledge of CIS and ISIN to design and develop secure software applications. I have experience in Python, Java, Dart, JavaScript, and C# from college, work, and projects of my own. I've also built websites with several frameworks and languages including Angular, React, ASP.NET MVC, NodeJS, and PHP. I've worked with both relational databases (MSSQL and MySQL) and document databases (MongoDB and Cloud Firestore). In my free time, I enjoy reading, exercising, investing, and learning.
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