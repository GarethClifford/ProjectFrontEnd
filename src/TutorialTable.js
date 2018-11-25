import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Video from './Video.js';
import ReactDOM from 'react-dom';

class TutorialTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      tuts: [{
        tutorialID:1,
        description:"3 Ways to chop onions like a pro",
        tutorialLink:'https://www.youtube.com/embed/0LJb66aYtG8'
      },{
        tutorialID:2,
        description:"Basic knife skills",
        tutorialLink:'https://www.youtube.com/embed/G-Fg7l7G1zw'
      },{
        tutorialID:3,
        description:"The easist way to peal garlic",
        tutorialLink:'https://www.youtube.com/embed/Dtck2h6U62c'
      },{
        tutorialID:4,
        description:"5 cooking essentials",
        tutorialLink:'https://www.youtube.com/embed/2aEANqAUdeM'
      }],
      IDOFVIDEO:''
    }
  }

  createTutorialButton =(cell,row) => {
    return <button id={row.tutorialID} className="btn btn-outline-primary" onClick={() => this.tutorialVideo(row.tutorialID)}>Watch tutorial</button>;
  }

  tutorialVideo = (cell, row) => {
    var tutorialURL = this.state.tuts[cell-1].tutorialLink;
    ReactDOM.render(<Video videourl={tutorialURL} />,document.getElementById('playvideo'));
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

export default TutorialTable;
// document.getElementById('playvideo').innerHTML="";
// ReactDOM.render(<Videothing />,document.getElementById('playvideo'));
// <Videothing id = "video1" videourl={'https://www.youtube.com/embed/0LJb66aYtG8'} />
// <Videothing id = "video2" videourl={'https://www.youtube.com/embed/WeLQpUC2IW4'} />
// <Videothing id = "video3" videourl={'https://www.youtube.com/embed/J94uO-urSTg'} />
// <Videothing id = "video4" videourl={'https://www.youtube.com/embed/TgA2y-Bgi3c'} />
// <iframe width="560" height="315" src=tutorialURL frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
