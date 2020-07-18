import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Projects.css';

export default class Projects extends React.Component {

  projectList = [];

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
    const visitIcon = <i className="fa fa-chevron-circle-right"></i>;
    const youtubeIcon = <i className="fa fa-youtube-play"></i>;

    let congratsgradsTech = ['Angular', 'HTML5', 'CSS', 'TypeScript', 'Bootstrap', 'NodeJS', 'Firebase'];
    let congratsgradsActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Congrats-Grads'},
      {title: 'VISIT', icon: visitIcon, link: 'https://congratsgrads.web.app'}
    ];
    let congratsgrads = <ProjectCard key={1} title='CongratsGrads' techList={this.buildTechCards(congratsgradsTech)}
    description='Developed an online senior library to honor the class of 2020. Over 200 high school seniors uploaded a profile.'
    lastUpdated={this.getLastUpdated(this.state.congratsgrads)} actionList={this.buildProjectActions(congratsgradsActions)} />;

    let utilityTech = ['Android', 'Java', 'Web API'];
    let utilityActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Utility-App'},
      {title: 'DOWNLOAD', icon: downloadIcon, link: 'https://play.google.com/store/apps/details?id=com.rt.utility'},
    ];
    let utility = <ProjectCard key={0} title='Utility' techList={this.buildTechCards(utilityTech)}
    description='Wrote an Android Utility app that features several programs. Used asynchronous tasks in Java, a SQLite database, and a web API.'
    lastUpdated={this.getLastUpdated(this.state.utility)} actionList={this.buildProjectActions(utilityActions)} />;

    let testAutomationTech = ['NightwatchJS', 'TypeScript', 'SQL'];
    let testAutomation = <ProjectCard key={2} title='Test Automation' techList={this.buildTechCards(testAutomationTech)}
    description='Responsible for designing, building, and managing a test automation application at Hagerty to ensure that Salesforce apps and web processes were fully functional in multiple environments.'
    lastUpdated={null} actionList={null} />;

    let pollertronTech = ['ASP.NET MVC', 'C#', 'JavaScript', 'HTML5', 'CSS', 'D3.js', 'Bootstrap', 'Material Design Lite', 'RivetsJS', 'Solr', 'SQL', 'SOQL'];
    let pollertron = <ProjectCard key={3} title='Pollertron' techList={this.buildTechCards(pollertronTech)}
    description='Built a data validation tool at Hagerty to check if the data in Salesforce matches the data in a SQL database. Designed the frontend views and backend solutions.'
    lastUpdated={null} actionList={null} />;

    let stockInsightTech = ['WPF', 'C#', 'MongoDB', 'Web API'];
    let stockInsightActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Stock-Insight'},
      {title: 'DEMO', icon: youtubeIcon, link: 'https://www.youtube.com/watch?v=sv_gQ37-n-w&feature=youtu.be'}
    ];
    let stockInsight = <ProjectCard key={4} title='Stock Insight' techList={this.buildTechCards(stockInsightTech)}
    description='Developed a simple, responsive WPF stock application that includes persistence and real-time stock data.'
    lastUpdated={this.getLastUpdated(this.state.stockinsight)} actionList={this.buildProjectActions(stockInsightActions)} />;

    let chatversityTech = ['Angular', 'HTML5', 'CSS', 'TypeScript', 'Bootstrap', 'NodeJS', 'Okta', 'Pusher Chatkit'];
    let chatversityActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Chatversity_App'},
      {title: 'DEMO', icon: youtubeIcon, link: 'https://www.youtube.com/watch?v=M9QC3khGWIA'}
    ];
    let chatversity = <ProjectCard key={5} title='Chatversity' techList={this.buildTechCards(chatversityTech)}
    description='Designed and built an Angular 7 messaging app with a team. The product features user authentication, messaging, adding connections, user online status, and join/leave/delete room. We also created a static website to promote and support the web app.'
    lastUpdated={null} actionList={this.buildProjectActions(chatversityActions)} />;

    let pyemailcollegeTech = ['Python'];
    let pyemailcollegeActions = [
      {title: 'GitHub', icon: githubIcon, link: 'https://github.com/tarkowr/PyEmailCollege'}
    ];
    let pyemailcollege = <ProjectCard key={6} title='PyEmailCollege' techList={this.buildTechCards(pyemailcollegeTech)}
    description='Wrote a Python script to send an email to every university in a country. It sends the email through the G-Mail service and uses the Python Universities package to get each university domain.'
    lastUpdated={this.getLastUpdated(this.state.pyemailcollege)} actionList={this.buildProjectActions(pyemailcollegeActions)} />;

    let eportfolioTech = ['React', 'HTML5', 'CSS', 'JavaScript'];
    let eportfolioActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/E-Portfolio-3.0'}
    ];
    let eportfolio = <ProjectCard key={7} title='E-Portfolio' techList={this.buildTechCards(eportfolioTech)}
    description='Built this website from scratch using several web technologies.'
    lastUpdated={this.getLastUpdated(this.state.eportfolio)} actionList={this.buildProjectActions(eportfolioActions)} />;

    return [congratsgrads, utility, testAutomation, pollertron, stockInsight, chatversity, pyemailcollege, eportfolio];
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
      utility: this.parseGitHubProject(data, 'Utility-App'),
      congratsgrads: this.parseGitHubProject(data, 'Congrats-Grads'),
      stockinsight: this.parseGitHubProject(data, 'Stock-Insight'),
      pyemailcollege: this.parseGitHubProject(data, 'PyEmailCollege'),
      eportfolio: this.parseGitHubProject(data, 'E-Portfolio-3.0')
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
    this.projectList = this.getProjectList();

    return (
      <div id="projects-component" className="Projects py-5 text-white">
        <div className="my-5 text-center">
          <div className="h1">&mdash; Projects &mdash;</div>
          <div className="mx-3 my-5">
            <div className="row mx-0">
              <div className="col-12 col-lg-8 offset-lg-2">
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
      <a target="_blank" rel="noopener noreferrer" href={this.props.link}>
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