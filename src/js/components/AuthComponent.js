import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../actions";

class AuthComponent extends Component {
  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <div>
            <p className="ui label big green">Logged-in as <span style={{color: "black"}}>{this.props.currentUserLogin}</span></p>
            <button className="ui button" onClick={() => this.props.logOut()}>
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <Link to="/sign-in" className="ui button red">
              Sign In
            </Link>
            <Link to="/log-in" className="ui button">
              Log In
            </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    currentUserLogin: state.auth.currentUserLogin
  };
};
export default connect(
  mapStateToProps,
  { logOut }
)(AuthComponent);
