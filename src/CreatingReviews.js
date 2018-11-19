import React, { Component } from 'react';
import axios from 'axios';
import UserTables from './UserTables.js';
import ReactDOM from 'react-dom';
import CreateUser from './CreateUser';
import RecipeTables from './RecipeTables';

class CreatingReviews extends Component {
  constructor(props) {
    super(props);
    }
    getAllUsers = () => {
      ReactDOM.render(<UserTables />,document.getElementById('creatingARecipe'));
    }
    createUser = () => {
      ReactDOM.render(<CreateUser />,document.getElementById('creatingARecipe'));
    }
  createReview = (event) => {
    event.preventDefault();
    var data ={
      reviewRating:document.getElementById('ratingOfRecipe').value,
      reviewComments:document.getElementById('commentsReview').value,
      userID:document.getElementById('idUser').value,
      recipeID:document.getElementById('idRecipeNumber').value,
    }
    axios.post('http://localhost:8081/MyPersonalProject/rest/reviews/createReview', data)
         .then((response) => {
           console.log(response.data);

    });
    document.getElementById('creatingARecipe').innerHTML='Review has been added';
    ReactDOM.render(<RecipeTables />, document.getElementById('creatingARecipe'));
}
render() {
  return (
    <div>
    Recipe ID
    <br/>
    <input id="idRecipeNumber" type = "number" placeholder = "ID Number" />
    <br/>
    Enter your user ID number
    <br/>
    <input id = "idUser" type = "number" placeholder = "User ID" />
    <br/>
    Give the recipe a rating from 1-5. 5 being the best, 1 the worst
    <br/>
    <input id = "ratingOfRecipe"  type = "number" placeholder = "Rating" />
    <br/>
    Feel free to add any comments on the recipe
    <br/>
    <input id ="commentsReview" type ="text" placeholder = "Comments" />
    <br/>
    <button className="btn btn-success" onClick={this.createReview}>Add review</button>
    </div>
  );
}
}

export default CreatingReviews;
