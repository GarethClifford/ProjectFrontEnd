import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import Stuff from './Stuff.js';

class AddRecipes extends Component {
functionAddRecipes() {
  ReactDOM.render(<Stuff />,document.getElementById('stuff'));
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
