import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn, BSTable } from 'react-bootstrap-table';
import UpdateRecipes from './UpdateRecipes.js';
import ReactDOM from 'react-dom';


class RecipeTables extends Component {
  constructor(props){
    super(props);
    this.state = {
      infos: this.props.array
    }
  }
  functionUpdateRecipes() {
    ReactDOM.render(<UpdateRecipes />,document.getElementById('updating'));
  }
    getAllRecipes = () => {
      axios.get('http://localhost:8081/MyPersonalProject/rest/recipes/getAll').then(response => {
        this.setState({
          infos: response.data
        });
      });
    }
    createDeleteButton =(cell,row) => {
      return <button id={row.recipeID} className="btn btn-danger" onClick={() => this.deleteRecipe(row.recipeID)}>Delete recipe</button>;
    }
    deleteRecipe = (event) => {
      axios.delete('http://localhost:8081/MyPersonalProject/rest/recipes/deleteRecipe/' + event).then((response) => {
    window.location.reload()
      });
    }
    createUpdateButton =(cell,row) => {
      return <button id={row.recideID} className="btn btn-warning" onClick={() => this.updateRecipe(row.recipeID)}>Update recipe</button>;
    }
    updateRecipe = (event) => {
      var data = {

      }
      axios.put('http://localhost:8081/MyPersonalProject/rest/recipes/updateRecipe/' + event, data)
    }
  componentDidMount() {
    this.getAllRecipes();
  }
  render () {
    const options = {
      expandRowBgColor:'rgb(242,255,163)'
    };
    return (
      <div className="recipeTable" style={{width:'75%'}} >
      <BootstrapTable data={this.state.infos}
      options={ options }
      striped
      expandableRow={ this.isExpandableRow }
      expandComponent={ this.expandComponent }
      search>
      <TableHeaderColumn Column width={'3%'} dataField='recipeID' isKey>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField='recipeName'>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='recipeIngredients'>Ingredients</TableHeaderColumn>
      <TableHeaderColumn dataField='recipeMethod'>Method</TableHeaderColumn>
      <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton}>Delete</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}
export default RecipeTables;
