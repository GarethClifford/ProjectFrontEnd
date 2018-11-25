import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeTables from './RecipeTables.js'

class GetRecipes extends Component {
functionGetRecipeTables() {
  ReactDOM.render(<RecipeTables />,document.getElementById('contentOfDiv'));
}
  render() {
    return (
      <div>
      <button className='btn btn' onClick={() => this.functionGetRecipeTables()}>Get recipes</button>
      </div>
    );
  }
}

export default GetRecipes;
