import React, { Component } from 'react';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';

class Stuff extends Component {

  createRecipe = () => {

  }
render() {
  return (
    <div>
    Name of recipe
    <br/>
    <input type = "text" id = "nameOfRecipe" placeholder = "Name..." />
    <br/>
    List all the ingredients (seperated by a comma)
    <br/>
    <input type = "text" id = "ingredientsOfRecipe" placeholder = "Ingredients..." />
    <br/>
    Describe how you make your meal
    <br/>
    <input type = "text" id = "methodOfRecipe" placeholder = "Method..." />
    <br/>
    Please enter your unique ID number, if you do not have one please click <a href="www.google.com">here</a> to create an account
    <br/>
    <input type ="number" id ="idOfUserAddingRecipe" placeholder = "ID number" />
    <br/>
    <button className="btn tbn-primary" onClick={this.createRecipe}>Add recipe</button>
    </div>
  );
}
}

export default Stuff;
