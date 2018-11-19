import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserTables from './UserTables.js'

class GetUsers extends Component {
functionGetAllUsers() {
  ReactDOM.render(<UserTables />,document.getElementById('creatingARecipe'));
}
  render() {
    return (
      <div>
      <button className='btn btn' onClick={() => this.functionGetAllUsers()}>Get users</button>
      </div>
    );
  }
}

export default GetUsers;
