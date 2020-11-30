import React from 'react';
import axios from 'axios';
import './Footer.css';

export default class Footer extends React.Component {

  state = {
    hoverIndex: -1,
    hasRated: undefined
  }

  onStarMouseOver = (index) => {
    if (this.state.hasRated) return;

    this.setState({
      hoverIndex: index
    });
  }

  onStarMouseOut = () => {
    if (this.state.hasRated) return;

    this.setState({
      hoverIndex: -1
    });
  }

  onStarClick = (rating) => {
    if (this.state.hasRated) return;
    this.postRating(rating);
  }

  buildStars() {
    if (this.state.hasRated === undefined) return;

    let stars = [];

    for(let i=0; i<5; i++) {
      let starClass = i > this.state.hoverIndex ? 'star-nohover' : 'star-hover';

      stars.push(
        <i key={i+1} className={`fa fa-star px-1 star ${starClass}`} onClick={() => this.onStarClick(i+1)}
        onMouseOver={() => this.onStarMouseOver(i)} onMouseOut={() => this.onStarMouseOut()}> </i>
      );
    }

    return stars;
  }

  async postRating(rating) {
    const url = 'https://richietarkowski.com/rating/add';

    this.setState({
      hasRated: true,
      hoverIndex: rating - 1
    });

    await axios.post(url, {rating: rating}).catch(error => console.log(error));
  }

  async fetchRating() {
    const url = 'https://richietarkowski.com/rating/get';

    let response = await axios.get(url).catch(error => console.log(error));

    if (response) {
      this.setState({
        hasRated: response.data?.id != null,
        hoverIndex: response.data?.rating ? response.data.rating - 1 : -1
      });
    }
  }

  componentDidMount() {
    this.fetchRating();
  }

  render() {
    return (
      <div className="my-5 pt-4 pb-5 text-center">
        <a className="footer-icon mx-2" target="_blank" rel="noopener noreferrer" href="https://github.com/tarkowr"><i className="fa fa-github"> </i></a>
        <a className="footer-icon mx-2" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/richie-tarkowski-273238155"><i className="fa fa-linkedin-square"> </i></a>
        <a className="footer-icon mx-2" target="_blank" rel="noopener noreferrer" href="https://trailhead.com/me/rtarkowski"><i className="fa fa-cloud"> </i></a>
        <div className="footer-email mt-4">You can reach me at<span> <a href="mailto:tarkowr@gmail.com">tarkowr@gmail.com</a> </span></div>
        <div className="mt-4">
          { this.buildStars() }
        </div>
      </div> 
    );
  }
}
