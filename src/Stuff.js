import React, { Component } from 'react';
import axios from 'axios';

class Stuff extends Component {
  constructor(props) {
    super(props);

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
            window.location.reload();
    });
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
    Please enter your unique ID number, if you do not have one please click <a href="www.google.com">here</a> to create an account
    <br/>
    <input id ="idOfUserAddingRecipe" type ="number" placeholder = "ID number" />
    <br/>
    <button className="btn btn-success" onClick={this.createRecipe}>Add recipe</button>
    </div>
  );
}
}

export default Stuff;
