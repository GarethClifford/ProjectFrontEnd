import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Tutorials from './Tutorials.js'

class TutorialTable extends Component {
functionGetTutorials() {
  ReactDOM.render(<Tutorials />,document.getElementById('creatingARecipe'));
}
  render() {
    return (
      <div>
      <button className='btn btn-primary' onClick={() => this.functionGetTutorials()}>Some useful tutorials</button>
      </div>
    );
  }
}

export default TutorialTable;
