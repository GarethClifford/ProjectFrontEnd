import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CreateRecipes from './CreateRecipes.js';

class AddRecipes extends Component {
functionAddRecipes() {
  ReactDOM.render(<CreateRecipe/>,document.getElementById('creatingARecipe'));
}
  render() {
    return (
      <div>
      <button className="btn btn-success" onClick={this.functionAddRecipes}>{this.props.appRecipe}</button>
      </div>
    );
  }
}

export default AddRecipes;
