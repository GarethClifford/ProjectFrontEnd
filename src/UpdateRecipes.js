import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Stuff from './Stuff.js';
import AddRecipes from './AddRecipes.js';

class UpdateRecipes extends Component {
functionAddRecipes() {
  ReactDOM.render(<Stuff />,document.getElementById('stuff'));
}
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default UpdateRecipes;
