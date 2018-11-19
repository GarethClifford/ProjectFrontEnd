import React, { Component } from 'react';
import AddRecipes from './AddRecipes.js';
import UpdateRecipes from './UpdateRecipes.js';
import AddUser from './AddUser';
import './App.css';
import home from './images/home.jpg';
import AddReview from './AddReview.js';
import GetRecipes from './GetRecipes';
import GetUsers from './GetUsers';



class App extends Component {
  render() {
    return (
    <div >
       <header className="App-navbar">
        <img src={home} className="App-logo" alt="logo" style = {{  width: '100%' }}/>
        <h1 style={{ position:'absolute', top:'5%', left:'20%' }}> My Personal Project </h1>
        <h2 style={{ position:'absolute', top:'10%', left:'20%' }}> Search through the table to find  </h2>
        <h2 style={{ position:'absolute', top:'14%', left:'20%' }}> the recipe you are looking for </h2>
      </header>


        <div style={{position:'absolute', top:'40%', left:'20%'}} >
          <AddRecipes appRecipe="Add recipe"/>
          <br/>
          <AddUser />
          <br/>
          <AddReview />
        </div>


        <div style={{position:'absolute', top:'40%', left:'40%'}}>
          <GetRecipes />
          <br/>
          <GetUsers />
          <br/>
          <UpdateRecipes />
        </div>

        <div id='creatingARecipe'>
        </div>


      </div>

    );
  }
}

export default App;
