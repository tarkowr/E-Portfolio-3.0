import React from 'react';
import PropTypes from 'prop-types';
import Typed from 'react-typed';
import './Landing.css';

export default class Landing extends React.Component {
  name = <div className="name">Richie Tarkowski</div>;
  title = (
    <div className="title px-2">
      <Typed strings={['Studying Information Systems', 'Hagerty Software Engineer Intern']}
        typeSpeed={15} 
        startDelay={0}
        autoInsertCss={true}
        fadeOut={false}
        backDelay={2500}
        loop={true} />
    </div>);

  state = {
    linkLabel: <div></div>
  }

  // Handle link mouse over event.
  onLinkMouseOver = (label) => {
    this.setState({
      linkLabel: <div className="w-100 text-center text-white pt-3 link-hover-label">{label}</div>
    });
  }

  // Handle link mouse out event.
  onLinkMouseOut = () => {
    this.setState({
      linkLabel: <div></div>
    });
  }

  // Build landing link buttons.
  buildLinkButtons = () => {
    return (
      <div className="mt-5 pt-5">
        <LinkCard cardClass="link-linkedin" link="https://www.linkedin.com/in/richie-tarkowski-273238155" 
          icon={ <i className="fa fa-linkedin"> </i> } onMouseOver={() => this.onLinkMouseOver('LINKEDIN')} onMouseOut={this.onLinkMouseOut} />
        <LinkCard cardClass="link-github" link="https://github.com/tarkowr" 
          icon={ <i className="fa fa-github"> </i> } onMouseOver={() => this.onLinkMouseOver('GITHUB')} onMouseOut={this.onLinkMouseOut} />
        <LinkCard cardClass="link-sf" link="https://trailhead.com/me/rtarkowski" 
          icon={ <i className="fa fa-cloud"> </i> } onMouseOver={() => this.onLinkMouseOver('SALESFORCE TRAILHEAD')} onMouseOut={this.onLinkMouseOut} />
        <LinkCard cardClass="link-mail" link="mailto:tarkowr@gmail.com" 
          icon={ <i className="fa fa-envelope-o"> </i> } onMouseOver={() => this.onLinkMouseOver('EMAIL')} onMouseOut={this.onLinkMouseOut} />
      </div>
    );
  }

  render() {
    return (
      <div className="Landing w-100 text-center text-white">
        { this.name }
        { this.title }
        { this.buildLinkButtons() }
        { this.state.linkLabel }
      </div>
    );
  }
}

class LinkCard extends React.Component {
  render() {
    return (
      <a className={`splash-link ${this.props.cardClass}`} href={this.props.link} target="_blank" rel="noopener noreferrer"
      onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}>
        { this.props.icon }
      </a>
    );
  }
}

LinkCard.propTypes = {
  cardClass: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element,
  onMouseOver: PropTypes.func,
  onMouseOut: PropTypes.func
}