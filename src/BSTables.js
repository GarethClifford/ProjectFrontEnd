import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import UpdateRecipes from './UpdateRecipes.js';
import ReactDOM from 'react-dom';


class BSTables extends React.Component {
  render() {

      return (
        <BootstrapTable data={ this.shit }>
          <TableHeaderColumn dataField='userID' isKey={ true }>User ID</TableHeaderColumn>
          <TableHeaderColumn dataField='reviewID'>Review ID</TableHeaderColumn>
          <TableHeaderColumn dataField='reviewRating'>Rating</TableHeaderColumn>
          <TableHeaderColumn dataField='reviewComments'>Comments</TableHeaderColumn>
        </BootstrapTable>);

  }
}

export default BSTables;
