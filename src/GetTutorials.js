import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TutorialTable from './TutorialTable.js'

class GetTutorials extends Component {
functionGetTutorialTable() {
  ReactDOM.render(<TutorialTable />,document.getElementById('contentOfDiv'));
}
  render() {
    return (
      <div>
      <button className='btn btn-primary' onClick={() => this.functionGetTutorialTable()}>Some useful tutorials</button>
      </div>
    );
  }
}

export default GetTutorials;
