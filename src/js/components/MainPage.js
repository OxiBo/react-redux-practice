import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchClients } from "../actions";

class MainPage extends Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  renderComments() {
    return this.props.clients
      .filter(client => client.comments)
      .map(client => {
        // console.log(`${client.name.split(" ").join("-")}-${client.id}`)
        return (
          <div className="ui item" key={`${client.name.split(" ").join("-")}-${client.id}`}>
         
            <h5 className="header"> <i className="briefcase icon"></i> {client.name}</h5>
            <p className="ui small message">{client.comments}</p>
          </div>
        );
      });
  }

  render() {
    // console.log(this.props);
    return (
      <div className="ui container">
        <h1 className="ui header">Main page</h1>
        <div className="ui list container">{this.renderComments()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.clients);
  return {
    clients: state.clients
  };
};

export default connect(
  mapStateToProps,
  { fetchClients }
)(MainPage);
