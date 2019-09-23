import React, { Component } from "react";

export default class Reusable extends Component {
  state = {
    lat: null,
    errorMessage: ""
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    // console.log(this.props)
    return (
      <div
        className="alert alert-primary"
        role="alert"
        style={{ color: "pink" }}
      >
        {this.state.lat ? (
          <div>Latitude: {this.state.lat}</div>
        ) : (
          <p>User did not accept geolocation request</p>
        )}

        {this.props.children}
        {this.props.test}
        <hr/>
        
        <button type="button" className="btn btn-success">
          Success
        </button>

        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Warning
        </button>
        <button type="button" className="btn btn-info">
          Info????
        </button>
      </div>
    );
  }
}
