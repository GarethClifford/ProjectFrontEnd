import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GetAllRecipes from './GetAllRecipes.js';

class AddRecipes extends Component {
functionAddRecipes() {
  ReactDOM.render(<GetAllRecipes/>,document.getElementById('creatingARecipe'));
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
