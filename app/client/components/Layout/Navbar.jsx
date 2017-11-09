import React from 'react';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import ClassNames from 'classnames';
import NavLink from './NavLink.jsx';

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink to="/">EIO</NavLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <li><NavLink to="/signup">Sign Up</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
