import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeUpdate from './RecipeUpdate.js';

class UpdateRecipes extends Component {
functionRecipeUpdate() {
  ReactDOM.render(<RecipeUpdate />,document.getElementById('contentOfDiv'));
}
  render() {
    return (
      <div>
      <button className="btn btn-warning" onClick={this.functionRecipeUpdate}>Update Recipe</button>
      </div>
    );
  }
}

export default UpdateRecipes;
