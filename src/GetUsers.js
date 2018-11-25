import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserTables from './UserTables.js'

class GetUsers extends Component {
functionGetUserTables() {
  ReactDOM.render(<UserTables />,document.getElementById('contentOfDiv'));
}
  render() {
    return (
      <div>
      <button className='btn btn-default' onClick={() => this.functionGetUserTables()}>Get users</button>
      </div>
    );
  }
}

export default GetUsers;
