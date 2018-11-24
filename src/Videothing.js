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
    const opts = {
   height: '390',
   width: '640',
   playerVars: { // https://developers.google.com/youtube/player_parameters
     autoplay: 1
   }
 };
    return (
      <div id='youtubelink'>
      <YouTube
      videoId='0LJb66aYtG8'
      opts={opts}
      onReady={this.onReady} />
      </div>
    );
  }
}

export default Videothing;

// <iframe id = {this.props.videoid} width='560' height='315' src={this.state.tutorialLINK} frameBorder='0' allow='autoplay;encrypted-media;gyroscope; picture-in-picture' allowFullScreen></iframe>
