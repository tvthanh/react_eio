import React from 'react';
import { Link } from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    );
  }
}

export default Navbar;
