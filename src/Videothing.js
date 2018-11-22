import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tutorials from './Tutorials.js'
import YouTube from 'react-youtube';

class Videothing extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      tutorialURL: this.props.videourl
    })

  }
  onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <div>
      <YouTube
      videoID={this.state.tutorialURL}
      opts = {opts}
      onReady={this.onReady}
      />
      </div>
    );

  }
}

export default Videothing;
