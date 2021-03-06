import React, { Component } from 'react';
import axios from 'axios';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';
import {root} from './SettingUpIPURL.js'


class BSTable extends React.Component {
  render() {
      return (
        <BootstrapTable if='reviewDropTable' data={ this.props.data } options ={ { noDataText: 'There are currently no reviews for this recipe' } }>
          <TableHeaderColumn dataField='reviewID' isKey={ true }>Review ID</TableHeaderColumn>
          <TableHeaderColumn dataField='reviewRating'>Rating</TableHeaderColumn>
          <TableHeaderColumn tdStyle={{ whiteSpace: 'unset'}} dataField='reviewComments'>Comments</TableHeaderColumn>
          <TableHeaderColumn dataField='userID'>User ID</TableHeaderColumn>
        </BootstrapTable>);
}
}


export default class RecipeTables extends Component {
  constructor(props){
    super(props);
    this.state = {
      infos: this.props.array
    }
  }
  isExpandableRow(row) {
    return true
  }

  expandComponent(row) {
    return (
      <BSTable data={ row.reviews } />
    );
  }

    getAllRecipes = () => {
      axios.get(root + 'recipes/getAll').then(response => {
        this.setState({
          infos: response.data
        });
      });
    }
    createDeleteButton =(cell,row) => {
      return <button id={row.recipeID} className="btn btn-outline-danger" onClick={() => this.deleteRecipe(row.recipeID)}>Delete recipe</button>;
    }
    deleteRecipe = (event) => {
      axios.delete(root + 'recipes/deleteRecipe/' + event).then((response) => {
      window.location.reload();
      });

    }
    createDeleteButtonReview =(cell,row) => {
      return <button id={row.recipeID} className="btn btn-outline-danger" onClick={() => this.deleteRecipe(row.recipeID)}>Delete recipe</button>;
    }
    deleteReview = (event) => {
      axios.delete(root + 'reviews/deleteReview/' + event).then((reponse) => {
      ReactDOM.render(<RecipeTables />,document.getElementById('contentOfDiv'));
      });

    }

  componentDidMount() {
    this.getAllRecipes();
  }

  render () {
    const options = {
      expandRowBgColor: 'rgb(244, 188, 66)',
      expandBy:'column',
      noDataText: 'There are no recipes to show, please add some'
    }

    return (
      <div className="recipeTable" style={{ width: '75%', margin:'auto' }}>
      <p>To see a review of the recipe, click its ID number </p>
      <BootstrapTable data={this.state.infos}
      id='recipeTableShow'
      height='650'
      scrollTop={ 'Bottom' }
      search
      striped
      hover
      options={ options  }
      expandableRow={ this.isExpandableRow }
      expandComponent={ this.expandComponent }>
      <TableHeaderColumn Column width={'5%'} dataField='recipeID' dataAlign="center" isKey={ true }>ID</TableHeaderColumn>
      <TableHeaderColumn Column width={'25%'} dataField='recipeName' dataAlign="center">Name</TableHeaderColumn>
      <TableHeaderColumn dataField='recipeIngredients' dataAlign="center">Ingredients</TableHeaderColumn>
      <TableHeaderColumn tdStyle={{ whiteSpace: 'unset'}} dataField='recipeMethod'>Method</TableHeaderColumn>
      <TableHeaderColumn Column min width={'20%'} expandable={ false } dataField='button' dataFormat={this.createDeleteButton} dataAlign="center" >Delete</TableHeaderColumn>
      </BootstrapTable>
      </div>
    );
  }
}
