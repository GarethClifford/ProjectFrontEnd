import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeTables from './RecipeTables.js'

class GetRecipes extends Component {
functionGetAllRecipes() {
  ReactDOM.render(<RecipeTables />,document.getElementById('creatingARecipe'));
}
  render() {
    return (
      <div>
      <button className='btn btn' onClick={() => this.functionGetAllRecipes()}>Get recipes</button>
      </div>
    );
  }
}

export default GetRecipes;
