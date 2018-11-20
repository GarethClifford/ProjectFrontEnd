import React, { Component } from 'react';
import axios from 'axios';


class RecipeUpdate extends Component {
    updateRecipe = (event) => {
        var data = {
        recipeID:document.getElementById('idOfRecipe').value,
        recipeName:document.getElementById('newName').value,
        recipeIngredients:document.getElementById('newIngredients').value,
        recipeMethod:document.getElementById('newMethod').value
      };
      event.preventDefault();
      axios.put('http://localhost:8081/MyPersonalProject/rest/recipes/updateRecipe/' + document.getElementById('idOfRecipe').value, data).then((response) => {
        console.log(response.data);
        window.location.reload();
      });
    }
    componentDidMount() {
      this.countCharacter1();
      this.countCharacter2();
    }
    countCharacter1 = () => {
      var maxText = 5000;
      document.getElementById('countMessage1').innerHTML = '0 /' + maxText;
      document.getElementById('newIngredients').onkeyup = function() {
        var textLength = document.getElementById('newIngredients').value.length;
        var textRemaining = maxText - textLength;
        document.getElementById('countMessage1').innerHTML = textLength + ' / ' + maxText
      }

    }
    countCharacter2 = () => {
      var maxText = 5000;
      document.getElementById('countMessage2').innerHTML = '0 /' + maxText;
      document.getElementById('newMethod').onkeyup = function() {
        var textLength = document.getElementById('newMethod').value.length;
        var textRemaining = maxText - textLength;
        document.getElementById('countMessage2').innerHTML = textLength + ' / ' + maxText
      }

    }

render() {
return (

<div>
Enter the ID of the recipe you wish to update
<br/>
<input id="idOfRecipe" type = "number" placeholder = "Recipe ID" class ="form-control" style={{width:'10%'}} required = 'true'/>
Enter the new name
<br/>
<input id = "newName" type = "text" placeholder = "Name" class ="form-control" style={{width:'10%'}} />
Enter the new ingredients
<br/>
<textarea id = "newIngredients"  type = "text"placeholder = "Ingredients" class ="form-control" style={{width:'25%'}} rows ='3' maxlength="5000"/>
<h6 class="pull-right" id="countMessage1" ></h6>
Enter the new method (Max of 5000 characeters)
<br/>
<textarea id ="newMethod" type ="text" placeholder = "Method" class ="form-control" style={{width:'35%'}} rows ='4' maxlength="5000" />
<h6 class="pull-right" id="countMessage2"></h6>
<br/>
<button className="btn btn-success" onClick={this.updateRecipe}>Update recipe</button>
</div>

) }

}

export default RecipeUpdate;
