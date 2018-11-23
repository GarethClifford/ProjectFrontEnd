import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tutorials from './Tutorials.js'
import YouTube from 'react-youtube';

class Videothing extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      tutorialLINK: this.props.videourl
    })
  }
  onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    return (
      <div>
      <iframe width='100' height='100' src={this.state.tutorialLINK} frameBorder='0' allow='autoplay;encrypted-media;gyroscope; picture-in-picture' allowFullScreen></iframe>
      </div>
    );

  }
}

export default Videothing;
