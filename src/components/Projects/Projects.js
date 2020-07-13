import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Projects.css';

export default class Projects extends React.Component {

  projectList = [
    <ProjectCard key={0} title='' />
  ];

  state = {
    filter: null,
    githubData: []
  }

  fetchGitHubProjectData() {
    const url = 'https://api.github.com/users/tarkowr/repos';

    axios.get(url)
    .then(response => {
      this.setState({ githubData: response.data });
    })
    .catch(error => {
      console.log(error);
    });
  }

  parseGitHubProjectLastUpdated(projectName) {
    if (projectName == null || this.state.githubData == null) return null;

    let project =  this.state.githubData.find(project => project.name === projectName);

    if (project == null) return null;

    return project.updated_at;
  }

  componentDidMount() {
    this.fetchGitHubProjectData();
  }

  render() {
    console.log('BUILDING')
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
      <div className="TechCard text-white px-3 py-2">{this.props.title}</div>
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