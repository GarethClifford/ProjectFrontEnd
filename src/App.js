import React, { Component } from 'react';
import RecipeTables from './RecipeTables.js';
import AddRecipes from './AddRecipes.js';
import UpdateRecipes from './UpdateRecipes.js';
import UserTables from './UserTables.js';
import ReactDOM from 'react-dom';
import AddUser from './AddUser';
import './App.css';
import home from './images/home.jpg'
import 'react-bootstrap';


class App extends Component {

getAllUsers = () => {
  ReactDOM.render(<UserTables />,document.getElementById('showingUsers'));
}
getAllRecipes = () => {
  ReactDOM.render(<RecipeTables />,document.getElementById('userTable'));
}

  render() {
    return (
    <div >
       <header className="App-navbar">
          <img src={home} className="App-logo" alt="logo" style = {{  width: '100%' }}/>
          <h1 style={{position:'absolute', top:'10%', left:'20%'}}> My Personal Project </h1>
          <h2 style={{position:'absolute', top:'25%', left:'20%'}}> Search through the table to find  </h2>
          <h2 style={{position:'absolute', top:'30%', left:'20%'}}> the recipe you are looking for </h2>
        </header>


        <div style={{position:'absolute', top:'40%', left:'20%'}} >
          <AddRecipes appRecipe="Add recipe"/>
          <br/>
          <AddUser />
          <br/>
          <UpdateRecipes />
        </div>


        <div style={{position:'absolute', top:'40%', left:'40%'}}>
          <button className='btn btn' onClick={() => this.getAllRecipes()}>Get recipes</button>
          <br/> <br/>
          <button className="btn btn" onClick={() => this.getAllUsers()}>Get users</button>
        </div>


        <div id='creatingARecipe'>
        </div>


        <div id='creatingAUser'>
        </div>


        <div id='showingRecipes'>
        </div>


        <div id='showingUsers'>
        </div>


        <div id='updatingRecipes'>
        </div>

      </div>

    );
  }
}

export default App;
