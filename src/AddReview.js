import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import CreatingReviews from './CreatingReviews.js';

class AddReview extends Component {
functionAddRecipes() {
  ReactDOM.render(<CreatingReviews />,document.getElementById('creatingARecipe'));
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
