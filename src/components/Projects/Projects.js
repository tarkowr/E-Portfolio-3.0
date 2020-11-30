import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Projects.css';

export default class Projects extends React.Component {

  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.state.projectFilter = this.filters[0];
  }

  projectList = [];
  filters = ['Display All', 'ASP.NET MVC', 'Android', 'Angular', 'C#', 'Cybersecurity', 'DynamoDB', 'Firebase', 'Flutter', 'Java', 'NodeJS', 'Python', 'React', 'SQL', 'TypeScript'];

  state = {
    projectFilter: '',
    utility: null,
    stockinsight: null,
    pyemailcollege: null,
    eportfolio: null,
  }

  // Build a list of all projects.
  buildProjectList() {
    let keyIndex = 0;

    let nextKey = () => {
      keyIndex++;
      return keyIndex;
    }

    const githubIcon = <i className="fa fa-code"></i>;
    const visitIcon = <i className="fa fa-chevron-circle-right"></i>;
    const youtubeIcon = <i className="fa fa-youtube-play"></i>;

    const congratsgradsTech = ['Angular', 'HTML5', 'CSS', 'TypeScript', 'Bootstrap', 'NodeJS', 'Firebase'];
    const congratsgradsActions = [
      {title: 'VISIT', icon: visitIcon, link: 'https://congratsgrads.web.app'}
    ];
    const congratsgrads = <ProjectCard key={nextKey()} title='CongratsGrads' techList={this.buildTechCards(congratsgradsTech)}
    description='Developed an online library to honor high school seniors. Over 250 seniors have uploaded a profile so far!'
    lastUpdated={null} actionList={this.buildProjectActions(congratsgradsActions)} />;

    const utilityTech = ['Android', 'Java'];
    const utilityActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Utility-App'},
      {title: 'GOOGLE PLAY', icon: visitIcon, link: 'https://play.google.com/store/apps/details?id=com.rt.utility'},
    ];
    const utility = <ProjectCard key={nextKey()} title='Utility' techList={this.buildTechCards(utilityTech)}
    description='Wrote an Android Utility app that features several programs. Used asynchronous tasks in Java, a SQLite database, and a web API.'
    lastUpdated={this.formatProjectLastUpdated(this.state.utility)} actionList={this.buildProjectActions(utilityActions)} />;

    const testAutomationTech = ['NightwatchJS', 'TypeScript', 'SQL'];
    const testAutomation = <ProjectCard key={nextKey()} title='Test Automation' techList={this.buildTechCards(testAutomationTech)}
    description='Responsible for designing, building, and managing a test automation application at Hagerty to ensure that Salesforce apps and web processes were fully functional in multiple environments.'
    lastUpdated={null} actionList={null} />;

    const pollertronTech = ['ASP.NET MVC', 'C#', 'JavaScript', 'HTML5', 'CSS', 'D3.js', 'Bootstrap', 'Material Design Lite', 'RivetsJS', 'Solr', 'SQL', 'SOQL'];
    const pollertron = <ProjectCard key={nextKey()} title='Pollertron' techList={this.buildTechCards(pollertronTech)}
    description='Built a data validation tool at Hagerty to check if the data in Salesforce matches the data in a SQL database. Designed the frontend views and backend solutions.'
    lastUpdated={null} actionList={null} />;

    const insiderTech = ['Flutter', 'Dart', 'GraphQL'];
    const insiderActions = [
      {title: 'APP STORE', icon: visitIcon, link: 'https://apps.apple.com/us/app/hagerty/id386245989'},
      {title: 'GOOGLE PLAY', icon: visitIcon, link: 'https://play.google.com/store/apps/details?id=com.hagerty.carsthatmatter.android'},
    ];
    const insider = <ProjectCard key={nextKey()} title='Hagerty Insider App' techList={this.buildTechCards(insiderTech)}
    description={'Developed the Hagerty Insider App on Hagerty\'s mobile team with Flutter. Wrote unit and integration tests as well.'}
    lastUpdated={null} actionList={this.buildProjectActions(insiderActions)}/>;

    const stockInsightTech = ['WPF', 'C#', 'MongoDB'];
    const stockInsightActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Stock-Insight'},
      {title: 'DEMO', icon: youtubeIcon, link: 'https://www.youtube.com/watch?v=sv_gQ37-n-w&feature=youtu.be'}
    ];
    const stockInsight = <ProjectCard key={nextKey()} title='Stock Insight' techList={this.buildTechCards(stockInsightTech)}
    description='Developed a simple, responsive WPF stock application that includes persistence and real-time stock data.'
    lastUpdated={this.formatProjectLastUpdated(this.state.stockinsight)} actionList={this.buildProjectActions(stockInsightActions)} />;

    const chatversityTech = ['Angular', 'HTML5', 'CSS', 'TypeScript', 'Bootstrap', 'NodeJS', 'Okta', 'Pusher Chatkit'];
    const chatversityActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/Chatversity_App'},
      {title: 'DEMO', icon: youtubeIcon, link: 'https://www.youtube.com/watch?v=M9QC3khGWIA'}
    ];
    const chatversity = <ProjectCard key={nextKey()} title='Chatversity' techList={this.buildTechCards(chatversityTech)}
    description='Designed and built an Angular 7 messaging app with a team. The product features user authentication, messaging, adding connections, user online status, and join/leave/delete room. We also created a static website to promote and support the web app.'
    lastUpdated={null} actionList={this.buildProjectActions(chatversityActions)} />;

    const penTestTech = ['Cybersecurity', 'Kali Linux', 'Metasploit', 'Nmap', 'Wireshark', 'Hping3'];
    const penTestActions = [
      {title: 'VIEW', icon: visitIcon, link: '/penetration_test_report.pdf'}
    ];
    const penTest = <ProjectCard key={nextKey()} title='Penetration Test Report' techList={this.buildTechCards(penTestTech)}
    description='Performed a penetration test using techniques including password cracking, privilege escalation, and DoS against three virtual machines and SQL Injection, vulnerability scanning, and content discovery against two web applications.'
    lastUpdated={null} actionList={this.buildProjectActions(penTestActions)} />;

    const pyemailcollegeTech = ['Python'];
    const pyemailcollegeActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/PyEmailCollege'}
    ];
    const pyemailcollege = <ProjectCard key={nextKey()} title='PyEmailCollege' techList={this.buildTechCards(pyemailcollegeTech)}
    description='Wrote a Python script to send an email to every university in a country. It sends the email through the G-Mail service and uses the Python Universities package to get each university domain.'
    lastUpdated={this.formatProjectLastUpdated(this.state.pyemailcollege)} actionList={this.buildProjectActions(pyemailcollegeActions)} />;

    const eportfolioTech = ['React', 'HTML5', 'CSS', 'JavaScript', 'NodeJS', 'AWS', 'DynamoDB'];
    const eportfolioActions = [
      {title: 'GITHUB', icon: githubIcon, link: 'https://github.com/tarkowr/E-Portfolio-3.0'}
    ];
    const eportfolio = <ProjectCard key={nextKey()} title='E-Portfolio' techList={this.buildTechCards(eportfolioTech)}
    description='Built this website from scratch using several web technologies. Ratings stored in Amazon DynamoDB.'
    lastUpdated={this.formatProjectLastUpdated(this.state.eportfolio)} actionList={this.buildProjectActions(eportfolioActions)} />;

    return [congratsgrads, utility, testAutomation, pollertron, insider, stockInsight, chatversity, penTest, pyemailcollege, eportfolio];
  }

  // Builds a list of project tech cards.
  buildTechCards(techTitles = []) {
    let techList = [];

    for (let i=0; i<techTitles.length; i++) {
      const title = techTitles[i];
      if (!title) continue;
      techList.push(<TechCard key={i} title={title} />);
    }

    return techList;
  }

  // Builds a list of project action buttons.
  buildProjectActions(projectActions = []) {
    let actions = [];

    for (let i=0; i<projectActions.length; i++) {
      const title = projectActions[i].title;
      const icon = projectActions[i].icon;
      const link = projectActions[i].link;

      if (!title || !icon || !link) continue;

      actions.push(<ProjectButton key={i} title={title} icon={icon} link={link} />);
    }

    return actions;
  }

  // Retrieves github data via web api.
  async fetchGitHubData() {
    const url = 'https://api.github.com/users/tarkowr/repos';

    let response = await axios.get(url).catch(error => console.log(error));

    if (response) {
      this.updateProjectState(response.data);
    }
  }

  // Update state with github data for each project.
  updateProjectState(data) {
    this.setState({
      utility: this.parseGitHubProject(data, 'Utility-App'),
      stockinsight: this.parseGitHubProject(data, 'Stock-Insight'),
      pyemailcollege: this.parseGitHubProject(data, 'PyEmailCollege'),
      eportfolio: this.parseGitHubProject(data, 'E-Portfolio-3.0')
    });
  }

  // Get data for a project from the retrieved github data.
  parseGitHubProject(githubData, projectName) {
    if (projectName === null || githubData.length === 0) return null;

    return githubData.find(project => project.name === projectName);
  }

  // Get and format the last updated field from a project.
  formatProjectLastUpdated(projectData) {
    if (!projectData) return null;

    const repoLastUpdated = new Date(projectData.updated_at);
    const date = repoLastUpdated.getDate();
    const month = repoLastUpdated.getMonth();
    const year = repoLastUpdated.getFullYear();

    return (month + 1) + '-' + date + '-' + year;
  }

  // Builds a list of project filter options.
  buildFilterOptions() {
    let options = [];

    this.filters.forEach(option =>
      options.push(<option key={option} value={option}>{option}</option>)
    );

    return options;
  }

  // Update state when a new filter is selected.
  handleFilterChange(event) {
    this.setState({projectFilter: event.target.value});
  }

  // Filter the project list by the selected filter.
  filterProjects() {
    if(this.state.projectFilter !== '' && this.state.projectFilter !== this.filters[0]) {
      this.projectList = this.projectList.filter(project => 
        project?.props?.techList?.filter(tech => 
          tech?.props?.title === this.state.projectFilter
        )?.length > 0
      );
    }
  }

  componentDidMount() {
    this.fetchGitHubData();
  }

  render() {
    this.projectList = this.buildProjectList();
    this.filterProjects();

    return (
      <div id="projects-component" className="Projects scaled-py-5 text-white">
        <div className="scaled-my-5 text-center">
          <div className="h1">&mdash; Projects &mdash;</div>
          <div className="my-5">
            <div className="row mx-0">
              <div className="col-12 col-lg-8 offset-lg-2">
                <div className="mb-3 text-left">
                  <select className="p-2 extra-rounded" onChange={this.handleFilterChange} value={this.state.projectFilter}>
                    {this.buildFilterOptions()}
                  </select>
                </div>
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
    const lastUpdatedText = this.props.lastUpdated !== null ? <div><strong>Last Updated: </strong> {this.props.lastUpdated}</div> : '';

    return (
      <div className="ProjectCard text-left d-inline-block text-white w-100">
        <div className="project-title">{this.props.title}</div>
        <div className="mt-3">{this.props.techList}</div>
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
      <div className="TechCard text-white px-2 py-1 mt-1 mr-1 d-inline-block">{this.props.title}</div>
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
        <button className="ProjectButton text-dark border-0 mr-3 mt-1">{this.props.title} {this.props.icon}</button>
      </a>
    );
  }
}

ProjectButton.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.element
}