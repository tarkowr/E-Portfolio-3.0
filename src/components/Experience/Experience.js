import React from 'react';
import PropTypes from 'prop-types';
import './Experience.css';

export default class Experience extends React.Component {

  // Build an experience group title.
  buildGroupTitle(title) {
    return <div className="h5 bg-dark text-white group-title mb-3 py-2 px-3">{ title }</div>
  }

  // Build the education experience group.
  buildEducationGroup() {
    return (
      <div>
        { this.buildGroupTitle('EDUCATION') }
        <ExperienceCard imagePath='/fsu_icon.jpg' title='Ferris State University' date='August 2019 - Present' 
          description='Studying Information Systems (BA) and Information Security (Min). Key courses include Systems Analysis & Design, Mobile Development, and Ethical Hacking.' />
        <hr/>
        <ExperienceCard imagePath='/nmc_icon.png' title='Northwestern Michigan College' date='August 2017 - May 2019' 
          description='Studied Computer Information Technology. The core courses focused on web development (HTML, CSS, JavaScript, and PHP) and .NET application development (C#, WPF, and ASP.NET MVC).' />
      </div>
    );
  }

  // Build the work experience group.
  buildWorkExperienceGroup() {
    return (
      <div className="mt-4">
        { this.buildGroupTitle('WORK EXPERIENCE') }
        <ExperienceCard imagePath='/hagerty_icon.png' title='Hagerty'  date='May 2020 - Present' 
          description={`Developed the Hagerty Insider app with Flutter and Dart on Hagerty's mobile team. Collaborated with other full-time Flutter developers using Git/GitHub and Azure DevOps.`} />
        <hr />
        <ExperienceCard imagePath='/hagerty_icon.png' title='Hagerty' date='May 2019 - August 2019' 
          description={`Implemented numerous features in an ASP.NET MVC data validation tool with another intern. Also contributed to Hagerty's Agile Accounting web application built with Python and Django.`} />
        <hr />
        <ExperienceCard imagePath='/hagerty_icon.png' title='Hagerty' date='May 2018 - August 2018' 
          description={`Built and maintained a TypeScript test automation project with two other interns. Wrote SQL and SOQL queries to retrieve data from Hagerty's databases and Salesforce.`} />
      </div>
    );
  }

  render() {
    return (
      <div id="experience-component" className="scaled-py-5">
        <div className="scaled-my-5 text-center">
          <div className="h1">&mdash; Experience &mdash;</div>
          <div className="mx-1 my-5">
            <div className="row mx-0">
              <div className="col-12 col-lg-8 offset-lg-2 text-left">
                { this.buildEducationGroup() }
                { this.buildWorkExperienceGroup() }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ExperienceCard extends React.Component {
  render() {
    return (
      <div className="w-100 d-flex py-2">
        <img className="experience-card-image" src={this.props.imagePath} alt='Experience Icon' />
        <div className="ml-3">
          <div className="experience-card-title">
            { this.props.title }
          </div>
          <div className="text-secondary experience-card-date">
            { this.props.date }
          </div>
          <div className="experience-card-description">
            { this.props.description }
          </div>
        </div>
      </div>
    );
  }
}

ExperienceCard.propTypes = {
  imagePath: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string
}
