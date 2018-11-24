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
        description:"3 Ways to chop onions like a pro",
        tutorialLink:'0LJb66aYtG8'
      },{
        tutorialID:2,
        description:"Basic knife skills",
        tutorialLink:'G-Fg7l7G1zw'
      },{
        tutorialID:3,
        description:"The easist way to peal garlic",
        tutorialLink:'Dtck2h6U62c'
      },{
        tutorialID:4,
        description:"5 cooking essentials",
        tutorialLink:'2aEANqAUdeM'
      }],
      IDOFVIDEO:''
    }
  }

  createTutorialButton =(cell,row) => {
    var idnum = row.tutorialID;
    console.log(idnum);
    return <button id={row.tutorialID} className="btn btn-outline-primary" onClick={() => this.tutorialVideo(row.tutorialID)}>Watch tutorial</button>;
  }

  tutorialVideo = (number) => {
    console.log(this.state.IDOFVIDEO);
    ReactDOM.render(<Videothing />,document.getElementById('playvideo'));
  }

  render () {

    return (
      <div className="container-fluid userTable" >
      <div className="row">
        <div className="col-md-4">
        <BootstrapTable data={this.state.tuts}
        hover
        striped
        search>
        <TableHeaderColumn Column width={'7%'} dataField='tutorialID' isKey>ID</TableHeaderColumn>
        <TableHeaderColumn tdStyle={{ whiteSpace: 'unset'}} Column width={'30%'} dataField='description'>Description</TableHeaderColumn>
        <TableHeaderColumn Column width={'30%'} dataFormat={this.createTutorialButton} >Tutorial link</TableHeaderColumn>
        </BootstrapTable>
        </div>
        <div id='playvideo'className="col-md-8">
        </div>
        </div>
      </div>
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
