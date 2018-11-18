import React, { Component } from 'react';
import RecipeTables from './RecipeTables.js';
import AddRecipes from './AddRecipes.js';
import UpdateRecipes from './UpdateRecipes.js';
import UserTables from './UserTables.js';
import ReactDOM from 'react-dom';
import axios from 'axios';

class UserCreate extends Component {
  constructor(props) {
    super(props);
    }
    getAllUsers = () => {
      ReactDOM.render(<UserTables />,document.getElementById('userTable'));
    }
  createUser = (event) => {
    event.preventDefault();
    var data ={
      userName:document.getElementById('nameOfUser').value,
    }
    axios.post('http://localhost:8081/MyPersonalProject/rest/users/createUser', data)
         .then((response) => {
            console.log(response.data);
            window.location.reload();
    });
}
render() {
  return (
    <div>
    Name of user
    <br/>
    <input id="nameOfUser" type = "text" placeholder = "Name..." />
    <br/>
    <br/>
    <button className="btn btn-success" onClick={this.createUser}>Add user</button>
    <br/><br/>
    </div>
  );
}
}

export default UserCreate;
