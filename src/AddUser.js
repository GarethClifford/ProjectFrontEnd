import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import UserCreate from './UserCreate.js'

class AddUser extends Component {
functionAddUser() {
  ReactDOM.render(<UserCreate />,document.getElementById('makingAnAccount'));
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
