import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Homepage extends Component {

  functionHomeScreen() {
  window.location.reload();
}
  render() {
    return (
      <div>
      <button className="btn btn-dark btn-lg" onClick={this.functionHomeScreen}>Home</button>
      </div>
    );
  }


}
  export default Homepage;
