import React, { Component } from 'react';
import axios from 'axios';


class OtherStuff extends Component {
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
render() {
return (

<div>
Enter the ID of the recipe you wish to update
<br/>
<input id="idOfRecipe" type = "number" placeholder = "Recipe ID" />
<br/>
Enter the new name
<br/>
<input id = "newName" type = "text" placeholder = "Name" />
<br/>
Enter the new ingredients
<br/>
<input id = "newIngredients"  type = "text"placeholder = "Ingredients" />
<br/>
Enter the new method
<br/>
<input id ="newMethod" type ="text" placeholder = "Method" />
<br/>
<button className="btn btn-success" onClick={this.updateRecipe}>Update recipe</button>
</div>

) }

}

export default OtherStuff;
