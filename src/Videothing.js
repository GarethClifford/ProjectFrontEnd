import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tutorials from './Tutorials.js'
import YouTube from 'react-youtube';

class Videothing extends Component {
  constructor(props) {
    super(props);


  }
  onReady(event) {
    event.target.pauseVideo();
  }
  render() {

    return (
      <div>
      <iframe width='700' height='450' src={this.state.tutorialURL} frameBorder='0' allow='acceleromter;autoplay;encrypted-media;gyroscope; picture-in-picture' allowFullScreen></iframe>
      </div>
    );

  }
}

export default Videothing;
