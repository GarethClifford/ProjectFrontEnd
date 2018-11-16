import React, { Component } from 'react';
import RecipeTables from './RecipeTables.js';
import AddRecipes from './AddRecipes.js';
import UpdateRecipes from './UpdateRecipes.js';
import UserTables from './UserTables.js';
import ReactDOM from 'react-dom';
import AddUser from './AddUser';


class App extends Component {

getAllUsers = () => {
  ReactDOM.render(<UserTables />,document.getElementById('userTable'));
}

  render() {
    return (
    <div className="App" style={{align:'center'}}>
       <header className="App-header">
        <h1> My Personal Project </h1>
        <h2> Search through the table to find the recipe you are looking for </h2>
        <AddRecipes appRecipe="Add recipe"/>
        <br/>
        <UpdateRecipes />
         <div id='stuff'>
         </div>
         <br/>
         <div id='updating'>
        <RecipeTables />
        </div>
        <br/>
        <button className="btn btn" onClick={() => this.getAllUsers()}>Get users</button>
        <div id='makingAnAccount'>
        </div>
        <br/>
        <AddUser />
        <div id='userTable'>
        </div>

       </header>
     </div>
    );
  }
}

export default App;
