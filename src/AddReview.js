import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import CreateReviews from './CreateReviews.js';

class AddReview extends Component {
functionAddRecipes() {
  ReactDOM.render(<CreateReviews />,document.getElementById('contentOfDiv'));
}
  render() {
    return (
      <div>
      <button className="btn btn-success" onClick={this.functionAddRecipes}>Add review</button>
      </div>
    );
  }
}

export default AddReview;
