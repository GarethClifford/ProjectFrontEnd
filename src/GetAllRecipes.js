import React, { Component } from 'react';
import axios from 'axios';
import UserTables from './UserTables.js';
import ReactDOM from 'react-dom';
import CreateUser from './CreateUser';

class GetAllRecipes extends Component {
  constructor(props) {
    super(props);
    }
    getAllUsers = () => {
      ReactDOM.render(<UserTables />,document.getElementById('creatingARecipe'));
    }
    createUser = () => {
      ReactDOM.render(<CreateUser />,document.getElementById('creatingARecipe'));
    }
  createRecipe = (event) => {
    event.preventDefault();
    var data ={
      recipeName:document.getElementById('nameOfRecipe').value,
      recipeIngredients:document.getElementById('ingredientsOfRecipe').value,
      recipeMethod:document.getElementById('methodOfRecipe').value,
      userID:document.getElementById('idOfUserAddingRecipe').value
    }
    axios.post('http://localhost:8081/MyPersonalProject/rest/recipes/createRecipe', data)
         .then((response) => {
            console.log(response.data);

    });
    document.getElementById('creatingARecipe').innerHTML='Recipe has been added'
}
componentDidMount() {
  this.countCharacter1();
  this.countCharacter2();
}


countCharacter1 = () => {
  var maxText = 5000;
  document.getElementById('countMessage1').innerHTML = '0 /' + maxText;
  document.getElementById('ingredientsOfRecipe').onkeyup = function() {
    var textLength = document.getElementById('ingredientsOfRecipe').value.length;
    var textRemaining = maxText - textLength;
    document.getElementById('countMessage1').innerHTML = textLength + ' / ' + maxText
  }

}
countCharacter2 = () => {
  var maxText = 5000;
  document.getElementById('countMessage2').innerHTML = '0 /' + maxText;
  document.getElementById('methodOfRecipe').onkeyup = function() {
    var textLength = document.getElementById('methodOfRecipe').value.length;
    var textRemaining = maxText - textLength;
    document.getElementById('countMessage2').innerHTML = textLength + ' / ' + maxText
  }

}


render() {
  return (
    <div>
    Name of recipe
    <br/>
    <input id="nameOfRecipe" type = "text" placeholder = "Name..." class ="form-control" style={{width:'10%'}} />
    List all the ingredients
    <br/>
    <textarea id = "ingredientsOfRecipe" type = "text" placeholder = "Ingredients..." class ="form-control" style={{width:'25%'}} rows ='3' maxlength="5000" />
    <h6 class="pull-right" id="countMessage1" ></h6>
    Describe how you make your meal
    <textarea id = "methodOfRecipe"  type = "text"placeholder = "Method..." class ="form-control" style={{width:'35%'}} rows ='4' maxlength="5000" />
    <h6 class="pull-right" id="countMessage2" ></h6>

    Please enter your unique ID number, if you do not have one please click <a href ='#' onClick = {() => this.createUser()}> here </a> to create an account. If you do not know your Unique ID number, click <a href ='#' onClick = {() => this.getAllUsers()}> here </a> to find your ID number.
    <br/>
    <input id ="idOfUserAddingRecipe" type ="number" placeholder = "ID number" class ="form-control" style={{width:'10%'}} />
    <br/>
    <button className="btn btn-success" onClick={this.createRecipe}>Add recipe</button>
    </div>
  );
}
}

export default GetAllRecipes;
