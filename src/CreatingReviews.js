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
    axios.post('http://104.199.39.236:8080/MyPersonalProject/rest/reviews/createReview', data)
         .then((response) => {
           console.log(response.data);

    });
    document.getElementById('creatingARecipe').innerHTML='Review has been added';
    ReactDOM.render(<RecipeTables />, document.getElementById('creatingARecipe'));
}


componentDidMount() {
  this.countCharacter();
}


countCharacter = () => {
  var maxText = 225;
  document.getElementById('countMessage').innerHTML = '0 /' + maxText;
  document.getElementById('commentsReview').onkeyup = function() {
    var textLength = document.getElementById('commentsReview').value.length;
    var textRemaining = maxText - textLength;
    document.getElementById('countMessage').innerHTML = textLength + ' / ' + maxText
  }
}

render() {
  return (
    <div>
    Recipe ID
    <br/>
    <input id="idRecipeNumber" className ="form-control" type = "number" placeholder = "ID Number" style={{width:'150px'}} />
    Enter your user ID number
    <br/>
    <input id = "idUser" className ="form-control" type = "number" placeholder = "User ID" style={{width:'150px'}} />
    Give the recipe a rating from 1-5. 5 being the best, 1 the worst
    <br/>
    <input id = "ratingOfRecipe" className ="form-control" type = "number" placeholder = "Rating" style={{width:'150px'}} />
    Feel free to add any comments on the recipe)
    <br/>
    <textarea id ="commentsReview" className ="form-control" type ="text" placeholder = "Comments" style={{width:'500px'}} rows='3' maxLength="225" />
    <h6 className="pull-right" id="countMessage"></h6>
    <br/>
    <button className="btn btn-success" onClick={this.createReview}>Add review</button>
    </div>
  );
}
}

export default CreatingReviews;
