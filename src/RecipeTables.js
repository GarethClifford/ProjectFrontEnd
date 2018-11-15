import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn, BSTable } from 'react-bootstrap-table';


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
  isExpandableRow(row) {
    if (row.recideID < 100) return true;
    else return false;
  }

  expandComponent(row) {
      return (
        <BSTable data={ row.expand } />
      );
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
      <TableHeaderColumn Column width={'7%'} dataField='recipeID' isKey>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField='recipeName'>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='recipeIngredients'>Ingredients</TableHeaderColumn>
      <TableHeaderColumn dataField='recipeMethod'>Method</TableHeaderColumn>

      </BootstrapTable>
      </div>
    );
  }
}
export default RecipeTables;
