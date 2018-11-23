import React, { Component } from 'react';
import UserTables from './UserTables.js';
import ReactDOM from 'react-dom';
import axios from 'axios';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    }
    getAllUsers = () => {
      ReactDOM.render(<UserTables />,document.getElementById('creatingARecipe'));
    }
  createUser = (event) => {
    event.preventDefault();
    var data ={
      userName:document.getElementById('nameOfUser').value,
    }
    axios.post('http://104.199.39.236:8080/MyPersonalProject/rest/users/createUser', data)
         .then((response) => {
            console.log(response.data);
    });
    document.getElementById('creatingARecipe').innerHTML='User has been added'
}
render() {
  return (
    <div>
    Name of user
    <br/>
    <input id="nameOfUser" type = "text" placeholder = "Name..." className ="form-control" style={{width:'150px'}} />
    <br/>
    <button className="btn btn-success" onClick={this.createUser}>Add user</button>
    <br/><br/>
    </div>
  );
}
}

export default CreateUser;
