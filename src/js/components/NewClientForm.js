import React, { Component } from "react";
import { connect } from "react-redux";
import passwordHash from "password-hash"
import { signIn } from '../actions'
import CreateForm from "./CreateForm";
import uniqid from 'uniqid';


class NewClientForm extends Component {
  onSubmit = formValues => {
    // const newTime = Date();
    // console.log(newTime)
    console.log(formValues);
    const id = uniqid();
    const hash = passwordHash.generate(formValues.password)
   
    // console.log(formValues)
    this.props.signIn({...formValues, password: hash, userId: id })
  };

  render() {
    return (
      <div className="container">
          <h4 className="header">Register as a new client</h4>
        <CreateForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { signIn })(NewClientForm)