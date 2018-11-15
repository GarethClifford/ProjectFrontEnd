import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';
import Stuff from './Stuff.js';

class AddRecipes extends Component {
functionAddRecipes() {
  ReactDOM.render(<Stuff />,document.getElementById('stuff'));

}

  render() {
    return (
      <div>
      <button className="btn tbn-primary" onClick={this.functionAddRecipes}>{this.props.appRecipe}</button>
          <p id='stuff'></p>
      </div>
    );
  }
}

export default AddRecipes
