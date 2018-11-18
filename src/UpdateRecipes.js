import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Stuff from './Stuff.js';
import AddRecipes from './AddRecipes.js';
import OtherStuff from './OtherStuff.js';

class UpdateRecipes extends Component {
functionUpdateRecipes() {
  ReactDOM.render(<OtherStuff />,document.getElementById('stuff'));
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
