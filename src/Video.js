import React, { Component } from 'react';

class Video extends Component {
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
      <div id='youtubelink'>
      <p> Please clear the screen to watch a different clip. Click the button. </p>
      <iframe id = {this.props.videoid} title="Youtube clip of a tutrorial" width='560' height='315' src={this.state.tutorialLINK} frameBorder='0' allow='autoplay;encrypted-media;gyroscope; picture-in-picture' allowFullScreen></iframe>
      </div>
    );
  }
}

export default Video;
