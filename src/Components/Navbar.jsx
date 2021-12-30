import React from 'react';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <h4 className="navbar-brand position-relative m-3">
            Counter<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{this.props.totalCounters}</span>
          </h4>
        </div>
      </nav>
    );
  }
}
