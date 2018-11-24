import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, BSTable } from 'react-bootstrap-table';
import Videothing from './Videothing.js';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';

class Tutorials extends Component {
  constructor(props){
    super(props);
    this.state = {
      tuts: [{
        tutorialID:1,
        recipeID:1,
        userID:1,
        tutorialLink:'https://www.youtube.com/watch?v=0LJb66aYtG8'
      },{
        tutorialID:2,
        recipeID:36,
        userID:4,
        tutorialLink:'https://www.youtube.com/watch?v=WeLQpUC2IW4'
      },{
        tutorialID:3,
        recipeID:11,
        userID:39,
        tutorialLink:'https://www.youtube.com/watch?v=J94uO-urSTg'
      },{
        tutorialID:4,
        recipeID:3,
        userID:7,
        tutorialLink:'https://www.youtube.com/watch?v=TgA2y-Bgi3c'
      }],
      videourl:""
    }
  }

  createTutorialButton =(cell,row) => {
    return <button id={row.tutorialID} className="btn btn-outline-primary" onClick={() => this.tutorialVideo(row.tutorialID)}>Watch tutorial</button>;
  }

  tutorialVideo = (cell, row) => {
    for(var i = 1; i<5;i++){
      var id = "video"+i;
      var video = document.getElementById(id);
      var videoId = id.substring(5);
      console.log(cell);
      console.log(videoId);
      if(cell==videoId) {
        document.getElementById(id).style.height = '450px';
        video.style.width = '700px';
      }else{
        video.style.height = '1px';
        video.style.width = '1px';
      }
    }
  }

  render () {

    return (
      <div className="userTable" style={{width:'30%', margin:'auto'}} >
      <div style={{float:'left'}}>
      <BootstrapTable data={this.state.tuts}
      hover
      striped
      search>
      <TableHeaderColumn Column width={'7%'} dataField='tutorialID' isKey>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'13%'} dataField='recipeID'>Recipe ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'13%'} dataField='userID' >User ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'30%'} dataFormat={this.createTutorialButton} >Tutorial link</TableHeaderColumn>
      </BootstrapTable>
      </div><div id='playvideo'>
      <Videothing id = "video1" videourl={'https://www.youtube.com/watch?v=0LJb66aYtG8'} />
      <Videothing id = "video2" videourl={'https://www.youtube.com/watch?v=WeLQpUC2IW4'} />
      <Videothing id = "video3" videourl={'https://www.youtube.com/watch?v=J94uO-urSTg'} />
      <Videothing id = "video4" videourl={'https://www.youtube.com/watch?v=TgA2y-Bgi3c'} />
      </div></div>
    );
  }
}

export default Tutorials;
// document.getElementById('playvideo').innerHTML="";
// ReactDOM.render(<Videothing />,document.getElementById('playvideo'));
// <Videothing id = "video1" videourl={'https://www.youtube.com/embed/0LJb66aYtG8'} />
// <Videothing id = "video2" videourl={'https://www.youtube.com/embed/WeLQpUC2IW4'} />
// <Videothing id = "video3" videourl={'https://www.youtube.com/embed/J94uO-urSTg'} />
// <Videothing id = "video4" videourl={'https://www.youtube.com/embed/TgA2y-Bgi3c'} />
// <iframe width="560" height="315" src=tutorialURL frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
