import React, { Component } from 'react';
import axios from 'axios';
import UserTables from './UserTables.js';
import ReactDOM from 'react-dom';
import UserCreate from './UserCreate';

class Stuff extends Component {
  constructor(props) {
    super(props);
    }
    getAllUsers = () => {
      ReactDOM.render(<UserTables />,document.getElementById('showingUsers'));
    }
    createUser = () => {
      ReactDOM.render(<UserCreate />,document.getElementById('createUser'))
    }
  createRecipe = (event) => {
    event.preventDefault();
    var data ={
      recipeName:document.getElementById('nameOfRecipe').value,
      recipeIngredients:document.getElementById('ingredientsOfRecipe').value,
      recipeMethod:document.getElementById('methodOfRecipe').value,
      userID:document.getElementById('idOfUserAddingRecipe').vaue
    }
    axios.post('http://localhost:8081/MyPersonalProject/rest/recipes/createRecipe', data)
         .then((response) => {
            console.log(response.data);

    });
    document.getElementById('creatingARecipe').innerHTML='Recipe has been added'
}
render() {
  return (
    <div>
    Name of recipe
    <br/>
    <input id="nameOfRecipe" type = "text" placeholder = "Name..." />
    <br/>
    List all the ingredients (seperated by a comma)
    <br/>
    <input id = "ingredientsOfRecipe" type = "text" placeholder = "Ingredients..." />
    <br/>
    Describe how you make your meal
    <br/>
    <input id = "methodOfRecipe"  type = "text"placeholder = "Method..." />
    <br/>
    Please enter your unique ID number, if you do not have one please click <a href = '#' onClick={() => this.createUser()}>here</a> to create an account. If you do not know your Unique ID number, click <a href ='#' onClick = {() => this.getAllUsers()}> here </a> to find your ID number.
    <br/>
    <input id ="idOfUserAddingRecipe" type ="number" placeholder = "ID number" />
    <br/>
    <button className="btn btn-success" onClick={this.createRecipe}>Add recipe</button>
    </div>
  );
}
}

export default Stuff;
