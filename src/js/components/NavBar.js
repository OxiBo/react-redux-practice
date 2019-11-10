import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AuthComponent from "./AuthComponent";

const NavBar = (props) => {
  return (
    <div className="ui asd menu navbar">
      <div className="ui container">
        <Link to="/" className="header item">
          Main page
        </Link>

        {props.isLoggedIn && (
          <Link to="/posts" className="item">
            Blog posts
          </Link>
        )}

        <Link to="/counter-one" className="item">
          Counter One
        </Link>
        <Link to="/counter-two" className="item">
          Counter Two
        </Link>
        <Link to="/timer" className="item">
          Timer
        </Link>
        <Link to="/date-picker" className="item">
          <i className="calendar alternate outline icon"></i>Date picker
        </Link>
        <Link to="/calculator" className="item">
          <i className="calculator icon"></i>Calculator
        </Link>
        <div className="right menu">
          <AuthComponent />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};
export default connect(mapStateToProps)(NavBar);
