import React, { Component } from 'react';
import axios from 'axios';
import UserTables from './UserTables.js';
import ReactDOM from 'react-dom';
import CreateUser from './CreateUser';

class CreateRecipe extends Component {
    getAllUsers = () => {
      ReactDOM.render(<UserTables />,document.getElementById('contentOfDiv'));
    }
    createUser = () => {
      ReactDOM.render(<CreateUser />,document.getElementById('contentOfDiv'));
    }
  createRecipe = (event) => {
    event.preventDefault();
    var data ={
      recipeName:document.getElementById('nameOfRecipe').value,
      recipeIngredients:document.getElementById('ingredientsOfRecipe').value,
      recipeMethod:document.getElementById('methodOfRecipe').value,
      userID:document.getElementById('idOfUserAddingRecipe').value
    }
    axios.post('http://104.199.39.236:8080/MyPersonalProject/rest/recipes/createRecipe', data)
         .then((response) => {
            console.log(response.data);

    });
    document.getElementById('contentOfDiv').innerHTML='Recipe has been added'
}
componentDidMount() {
  this.countCharacterForIngredients();
  this.countCharacterForMethod();
}


countCharacterForIngredients = () => {
  var maxText = 5000;
  document.getElementById('ingredientsContent').innerHTML = '0 /' + maxText;
  document.getElementById('ingredientsOfRecipe').onkeyup = function() {
    var textLength = document.getElementById('ingredientsOfRecipe').value.length;
    document.getElementById('ingredientsContent').innerHTML = textLength + ' / ' + maxText
  }

}
countCharacterForMethod = () => {
  var maxText = 5000;
  document.getElementById('methodContent').innerHTML = '0 /' + maxText;
  document.getElementById('methodOfRecipe').onkeyup = function() {
    var textLength = document.getElementById('methodOfRecipe').value.length;
    document.getElementById('methodContent').innerHTML = textLength + ' / ' + maxText
  }

}


render() {
  return (
    <div>
    Name of recipe
    <br/>
    <input id="nameOfRecipe" type = "text" placeholder = "Name..." className ="form-control" style={{width:'200px'}} />
    List all the ingredients
    <br/>
    <textarea id = "ingredientsOfRecipe" type = "text" placeholder = "Ingredients..." className ="form-control" style={{width:'500px'}} rows ='3' maxLength="5000" />
    <h6 className="pull-right" id="ingredientsContent" >''</h6>
    Describe how you make your meal
    <textarea id = "methodOfRecipe"  type = "text" placeholder = "Method..." className ="form-control" style={{width:'700px'}} rows ='4' maxLength="5000" />
    <h6 className="pull-right" id="methodContent" >''</h6>
    Please enter your unique ID number, if you do not have one please click <a href ='#' onClick = {() => this.createUser()}> here </a> to create an account. If you do not know your Unique ID number, click <a href ='#' onClick = {() => this.getAllUsers()}> here </a> to find your ID number.
    <br/>
    <input id ="idOfUserAddingRecipe" type ="number" placeholder = "ID number" className ="form-control" style={{width:'150px'}} />
    <br/>
    <button className="btn btn-success" onClick={this.createRecipe}>Add recipe</button>
    </div>
  );
}
}

export default CreateRecipe;
