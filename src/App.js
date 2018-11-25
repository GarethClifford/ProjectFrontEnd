import React, { Component } from 'react';
import AddRecipes from './AddRecipes.js';
import UpdateRecipes from './UpdateRecipes.js';
import AddUser from './AddUser';
import './App.css';
import home from './images/home.jpg';
import AddReview from './AddReview.js';
import GetRecipes from './GetRecipes';
import GetUsers from './GetUsers';
import GetTutorials from './GetTutorials';
import Homepage from './Homepage.js';



class App extends Component {
  render() {
    return (
    <div >
     <div className="App-navbar container">
      <img src={home} className="App-logo" alt="logo" />
      <h1 style={{ position:'absolute', top:'5%', left:'25%' }}> My Personal Project <Homepage /> </h1>
      <div style={{paddingleft: '6px'}}>
      <div className="App-button1" style={{position:'absolute',top:'30%', left:'25%', font:'5vw' }} >
        <AddRecipes appRecipe="Add recipe" />
        <br/>
        <AddUser />
        <br/>
        <AddReview />
        <br/>
        <GetTutorials />
      </div>
      <div className="App-button2" style={{position:'absolute', top:'30%', left:'45%'}}>
        <GetRecipes />
        <br/>
        <GetUsers />
        <br/>
        <UpdateRecipes />
      </div>
      </div>
    </div>
    <br/>
    <div id='creatingARecipe'></div>
    </div>
    );
  }
}

export default App;
