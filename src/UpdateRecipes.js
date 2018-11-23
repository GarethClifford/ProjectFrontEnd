import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeUpdate from './RecipeUpdate.js';

class UpdateRecipes extends Component {
functionUpdateRecipes() {
  ReactDOM.render(<RecipeUpdate />,document.getElementById('creatingARecipe'));
}
  render() {
    return (
      <div>
      <button className="btn btn-warning" onClick={this.functionUpdateRecipes}>Update Recipe</button>
      </div>
    );
  }
}

export default UpdateRecipes;
