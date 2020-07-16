import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Projects.css';

export default class Projects extends React.Component {

  state = {
    filter: null,
    congratsgrads: null,
    utility: null,
    stockinsight: null,
    pyemailcollege: null,
    eportfolio: null,
  }

  getProjectList() {
    const githubIcon = <i className="fa fa-code"></i>;
    const downloadIcon = <i className="fa fa-arrow-down"></i>;

    let utilityTech = ['Android', 'Java', 'Web API'];
    let utilityActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Utility-App'},
      {title: 'DOWNLOAD', icon: downloadIcon, link: 'https://play.google.com/store/apps/details?id=com.rt.utility'},
    ];

    return [
      <ProjectCard key={0} title='Utility' techList={this.buildTechCards(utilityTech)}
        description='Wrote an Android Utility app that features several programs. Used asynchronous tasks in Java, a SQLite database, and a web API.'
        lastUpdated={this.getLastUpdated(this.state.utility)} actionList={this.buildProjectActions(utilityActions)} />
    ];
  }

  buildTechCards(techTitles = []) {
    let techList = [];

    for (let i=0; i<techTitles.length; i++) {
      techList.push(<TechCard key={i} title={techTitles[i]} />);
    }

    return techList;
  }

  buildProjectActions(projectActions = []) {
    let actions = [];

    for (let i=0; i<projectActions.length; i++) {
      actions.push(<ProjectButton key={i} title={projectActions[i].title} icon={projectActions[i].icon} link={projectActions[i].link} />);
    }

    return actions;
  }

  fetchGitHubProjectData() {
    const url = 'https://api.github.com/users/tarkowr/repos';

    axios.get(url)
    .then(response => {
      this.getProjectData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  getLastUpdated(projectData) {
    if (!projectData) return null;

    let repoLastUpdated = new Date(projectData.updated_at);
    let date = repoLastUpdated.getDate();
    let month = repoLastUpdated.getMonth();
    let year = repoLastUpdated.getFullYear();

    return (month + 1) + '-' + date + '-' + year;
  }

  getProjectData(data) {
    this.setState({
      utility: this.parseGitHubProject(data, 'Utility-App')
    });
  }

  parseGitHubProject(githubData, projectName) {
    if (projectName === null || githubData.length === 0) return null;

    return githubData.find(project => project.name === projectName);
  }

  componentDidMount() {
    this.fetchGitHubProjectData();
  }

  render() {
    let projectList = this.getProjectList();

    return (
      <div id="projects-component" className="Projects py-5 text-white">
        <div className="my-5 text-center">
          <div className="h1">&mdash; Projects &mdash;</div>
          <div className="mx-3 my-5">
            <div className="row mx-0">
              <div className="col-12 col-lg-8 offset-lg-2">
                {projectList}
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
    let lastUpdatedText = this.props.lastUpdated !== null ? <div><strong>Last Updated: </strong> {this.props.lastUpdated}</div> : '';

    return (
      <div className="ProjectCard text-left d-inline-block text-white w-100">
        <div className="project-title">{this.props.title}</div>
        <div>{this.props.techList}</div>
        <div className="my-3">{this.props.description}</div>
        <div className="pb-2">{lastUpdatedText}</div>
        <div className="mt-2">{this.props.actionList}</div>
      </div>
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
      <div className="TechCard text-white px-2 py-1 mt-3 mr-1 d-inline-block">{this.props.title}</div>
    );
  }
}

TechCard.propTypes = {
  title: PropTypes.string
}

class ProjectButton extends React.Component {
  render() {
    return(
      <a target="_blank" href={this.props.link}>
        <button className="ProjectButton text-dark border-0 mr-3">{this.props.title} {this.props.icon}</button>
      </a>
    );
  }
}

ProjectButton.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.element
}