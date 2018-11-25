import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CreateUser from './CreateUser.js'

class AddUser extends Component {
functionAddUser() {
  ReactDOM.render(<CreateUser />,document.getElementById('creatingARecipe'));
}
  render() {
    return (
      <div>
      <button className="btn btn-success" onClick={this.functionAddUser}>Create an account</button>
      </div>
    );
  }
}

export default AddUser;
