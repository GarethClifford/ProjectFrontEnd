import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TutorialTable from './TutorialTable.js'

class GetTutorials extends Component {
functionGetTutorials() {
  ReactDOM.render(<TutorialTable />,document.getElementById('creatingARecipe'));
}
  render() {
    return (
      <div>
      <button className='btn btn-primary' onClick={() => this.functionGetTutorials()}>Some useful tutorials</button>
      </div>
    );
  }
}

export default GetTutorials;
