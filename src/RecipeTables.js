import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import UpdateRecipes from './UpdateRecipes.js';
import ReactDOM from 'react-dom';





class RecipeTables extends Component {
  constructor(props){
    super(props);
    this.state = {
      infos: this.props.array
    }
  }


    getAllRecipes = () => {
      axios.get('http://localhost:8081/MyPersonalProject/rest/recipes/getAll').then(response => {
        this.setState({
          infos: response.data
        });
      });
    }
    createDeleteButton =(cell,row) => {
      console.log("SUP TOM");
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

  componentDidMount() {
    this.getAllRecipes();
  }
  render () {

    return (
      <div className="recipeTable" style={{width:'75%'}} >
      <BootstrapTable data={this.state.infos}
      striped
      search>
      <TableHeaderColumn Column width={'3%'} dataField='recipeID' isKey>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField='recipeName'>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='recipeIngredients'>Ingredients</TableHeaderColumn>
      <TableHeaderColumn tdStyle={{ whiteSpace: 'unset'}} dataField='recipeMethod'>Method</TableHeaderColumn>
      <TableHeaderColumn dataField='button' dataFormat={this.createDeleteButton}>Delete</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}
export default RecipeTables;
