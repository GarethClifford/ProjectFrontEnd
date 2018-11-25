import React, { Component } from 'react';
import axios from 'axios';
import UserTables from './UserTables.js';
import ReactDOM from 'react-dom';
import CreateUser from './CreateUser';
import RecipeTables from './RecipeTables';

class CreateReviews extends Component {
    getAllUsers = () => {
      ReactDOM.render(<UserTables />,document.getElementById('contentOfDiv'));
    }
    createUser = () => {
      ReactDOM.render(<CreateUser />,document.getElementById('contentOfDiv'));
    }
  createReview = (event) => {
    event.preventDefault();
    var data ={
      reviewRating:document.getElementById('ratingOfRecipe').value,
      reviewComments:document.getElementById('commentsInput').value,
      userID:document.getElementById('idUser').value,
      recipeID:document.getElementById('idRecipeNumber').value,
    }
    axios.post('http://104.199.39.236:8080/MyPersonalProject/rest/reviews/createReview', data)
         .then((response) => {
           console.log(response.data);

    });
    document.getElementById('contentOfDiv').innerHTML='Review has been added';
    ReactDOM.render(<RecipeTables />, document.getElementById('contentOfDiv'));
}


componentDidMount() {
  this.countCharacterForComments();
}


countCharacterForComments = () => {
  var maxText = 225;
  document.getElementById('commentContent').innerHTML = '0 /' + maxText;
  document.getElementById('commentsInput').onkeyup = function() {
    var textLength = document.getElementById('commentsInput').value.length;
    document.getElementById('commentContent').innerHTML = textLength + ' / ' + maxText
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
    <textarea id ="commentsInput" className ="form-control" type ="text" placeholder = "Comments" style={{width:'500px'}} rows='3' maxLength="225" />
    <h6 className="pull-right" id="commentContent">''</h6>
    <br/>
    <button className="btn btn-success" onClick={this.createReview}>Add review</button>
    </div>
  );
}
}

export default CreateReviews;
