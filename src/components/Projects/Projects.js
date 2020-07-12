import React from 'react';
import PropTypes from 'prop-types';
import './Projects.css';

export default class Projects extends React.Component {

  projectList = [
    <ProjectCard key={0} title='' />
  ];

  state = {
    filter: null,
    githubData: null
  }

  async fetchGitHubProjectData() {

  }

  parseGitHubProjectLastUpdated(projectName) {
    if (projectName == null || this.state.githubData == null) return null;
  }

  render() {
    return (
      <div id="projects-component" className="Projects py-5 text-white">
        <div className="my-5 text-center">
          <div className="h1">&mdash; Projects &mdash;</div>
          <div className="mx-3 my-5">
            <div className="row mx-0">
              <div className="col-12">
                {this.projectList}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ProjectCard extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  techList: PropTypes.array,
  description: PropTypes.string,
  lastUpdated: PropTypes.string,
  actionList: PropTypes.array
}

class TechCard extends React.Component {
  render() {
    return(
      <div></div>
    );
  }
}

TechCard.propTypes = {
  title: PropTypes.string
}

class ProjectButton extends React.Component {
  render() {
    return(
      <div></div>
    );
  }
}

ProjectButton.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.element
}