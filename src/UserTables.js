import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn, BSTable } from 'react-bootstrap-table';
import UpdateRecipes from './UpdateRecipes.js';
import ReactDOM from 'react-dom';

class UserTables extends Component {
  constructor(props){
    super(props);
    this.state = {
      peoples: this.props.array
    }
  }
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = () => {
    axios.get('http://localhost:8081/MyPersonalProject/rest/users/getAll').then(response => {
      this.setState({
        peoples: response.data
      });
    });
  }
  deleteUser = (event) => {
    axios.delete('http://localhost:8081/MyPersonalProject/rest/users/deleteUser/' + event).then((response) => {
  window.location.reload()
    });
  }
  createDeleteButton =(cell,row) => {
    return <button id={row.userID} className="btn btn-danger" onClick={() => this.deleteUser(row.userID)}>Delete account</button>;
  }


  render () {
    const options = {
      expandRowBgColor:'rgb(242,255,163)'
    };
    return (
      <div className="userTable" style={{width:'40%', margin:'auto'}} >
      <BootstrapTable data={this.state.peoples}
      options={ options }
      striped
      search>
      <TableHeaderColumn Column width={'7%'} dataField='userID' isKey>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField='userName'>Name</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField='button' dataFormat={this.createDeleteButton}>Delete</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }


}

export default UserTables;
