import React from 'react';

import Navigation from './Navbar.jsx'

class Layout extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Navigation />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
