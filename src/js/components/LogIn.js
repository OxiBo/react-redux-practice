import React, { Component } from "react";
import { connect } from "react-redux";
import LogInForm from "./LogInForm";
import { fetchClients, logIn } from "../actions";

class LogIn extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  onSubmit = formValues => {
   // find userId
    const userId = this.props.clients.find(client => client.email === formValues.email).userId;
    this.props.logIn(userId)

  };
  render() {
    return (
      <div>
        <LogInForm onSubmit={this.onSubmit} clients={this.props.clients} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients
  };
};
export default connect(
  mapStateToProps,
  { fetchClients, logIn }
)(LogIn);
