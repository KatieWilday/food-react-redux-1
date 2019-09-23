import React from 'react'
import fastfood from '../fastfood.png';
import NavBar from './NavBar';


class Header extends React.Component {
  render() {
    return (
        <div className="container-fluid App-header">
          <div className="row">
            <img src={fastfood} className="App-logo" alt="logo" />
          </div>
          <div className="row">
            <h1>Welcome to the Food App</h1>
            <p>Where we make all the decisions!</p>
          </div>
          <NavBar />
        </div>
    )
  }
}
export default Header;
