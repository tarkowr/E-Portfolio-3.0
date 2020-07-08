import React from 'react';
import PropTypes from 'prop-types';
import './Experience.css';

export default class Experience extends React.Component {
  buildGroupTitle(title) {
    return <div className="h5 bg-dark text-white group-title mb-3 py-2 px-3">{ title }</div>
  }

  buildEducationGroup() {
    return (
      <div>
        { this.buildGroupTitle('EDUCATION') }
        <ExperienceCard imagePath='/fsu_icon.jpg' title='Ferris State University' date='Fall 2019 - Current' 
          description='Studying Information Systems (BA) and Information Security (MIN). Key courses include systems analysis & design and mobile development.' />
        <ExperienceCard imagePath='/nmc_icon.png' title='Northwestern Michigan College' date='Fall 2017 - Spring 2019' 
          description='Studied Computer Information Technology. Key courses included web and .NET application development.' />
      </div>
    );
  }

  buildWorkExperienceGroup() {
    return (
      <div className="mt-4">
        { this.buildGroupTitle('WORK EXPERIENCE') }
        <ExperienceCard imagePath='/hagerty_icon.png' title='Hagerty' date='Summer 2020 - Current' 
          description={`Developed Hagerty's Insider app with Flutter and Dart on a mobile development team.`} />
        <ExperienceCard imagePath='/hagerty_icon.png' title='Hagerty' date='Summer 2019 - Winter 2020' 
          description='Implemented numerous features in an ASP.NET MVC data validation tool with another Software Engineer intern.' />
        <ExperienceCard imagePath='/hagerty_icon.png' title='Hagerty' date='Summer 2018 - Spring 2019' 
          description='Built and maintained a TypeScript test automation project with two other Software Engineer interns.' />
      </div>
    );
  }

  render() {
    return (
      <div id="experience-component" className="Experience py-5">
        <div className="my-5 text-center">
          <div className="h1">&mdash; Experience &mdash;</div>
          <div className="mx-3 my-5">
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
        <img className="experience-card-image" src={this.props.imagePath} />
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
