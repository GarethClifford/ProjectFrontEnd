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
        tutorialLink:'0LJb66aYtG8'
      },{
        tutorialID:2,
        recipeID:36,
        userID:4,
        tutorialLink:'WeLQpUC2IW4'
      },{
        tutorialID:3,
        recipeID:11,
        userID:39,
        tutorialLink:'J94uO-urSTg'
      },{
        tutorialID:4,
        recipeID:3,
        userID:7,
        tutorialLink:'TgA2y-Bgi3c'
      }],
    }
  }

  createTutorialButton =(cell,row) => {
    return <button id={row.tutorialID} className="btn btn-outline-primary" onClick={() => this.tutorialVideo(row.tutorialID)}>Watch tutorial</button>;
  }

  tutorialVideo = (cell, row) => {
    var tutorialURL = this.state.tuts[cell-1].tutorialLink;
    ReactDOM.render(<Videothing videourl={tutorialURL} />,document.getElementById('seeVideo'));
  }

  render () {

    return (
      <div className="userTable" style={{width:'30%', margin:'auto'}} >
      <div style={{display:'inline'}}>
      <BootstrapTable data={this.state.tuts}
      hover
      striped
      search>
      <TableHeaderColumn Column width={'7%'} dataField='tutorialID' isKey>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'13%'} dataField='recipeID'>Recipe ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'13%'} dataField='userID' >User ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'30%'} dataFormat={this.createTutorialButton} >Tutorial link</TableHeaderColumn>
      </BootstrapTable>
      </div><div style={{display:'inline'}}>

      </div></div>
    );
  }









}

export default Tutorials;
// <iframe width="560" height="315" src=tutorialURL frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>