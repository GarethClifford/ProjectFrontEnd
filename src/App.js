import React, { Component } from 'react';
import RecipeTables from './RecipeTables.js'
import AddRecipes from './AddRecipes.js'
import UpdateRecipes from './UpdateRecipes.js'


class App extends Component {

  render() {
    return (
    <div className="App">
       <header className="App-header">
        <h1> My Personal Project </h1>
        <h2> Search through the table to find the recipe you are looking for </h2>

        <AddRecipes appRecipe="Add recipe"/>
         <div id='stuff'>
         </div>
        <UpdateRecipes />
         <div id='updating'>
         </div>
        <RecipeTables />
       </header>
     </div>
    );
  }
}

export default App;
