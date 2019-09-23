import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import passwordHash from "password-hash";

class LogInForm extends Component {
  // class 'error' has display: none in semantic ui rules

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({
    input,
    meta,
    label,
    placeholder,
    required,
    type,
    id,
    min
  }) => {
    // const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    // console.log(meta);
    // console.log(somestuff);
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label htmlFor="">{label}</label>
        <input
          {...input}
          placeholder={placeholder}
          type={type}
          id={id}
          autoComplete="off"
          min={min}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
  };
  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        action=""
        className="ui form error"
      >
        <Field
          type="email"
          required
          id="email"
          placeholder=""
          name="email"
          component={this.renderInput}
          label="Email"
        />

        <Field
          type="password"
          required
          id="password"
          placeholder=""
          name="password"
          component={this.renderInput}
          label="Password"
        />

        <button className="ui button primary">Log In</button>
      </form>
    );
  }
}

const validate = (formValues, props) => {
  const errors = {};

  // check if user exist (if in clients array there is provided email)
  const findClient = props.clients.find(
    client => client.email === formValues.email
  );

  if (!formValues.email) {
    // run if the user did not enter your email
    errors.email = "You must enter your email";
  } else if (!findClient) {
    // run if the user did not enter correct(existing) email
    errors.email = "User with such email does not exist";
  }

  if (!formValues.password) {
    // run if the user did not enter your name
    errors.password = "You must enter your password";
  } else if (!passwordHash.verify(formValues.password, findClient.password)) {
    errors.password = "Incorrect password";
  }

  // console.log(errors);
  return errors;
};

export default reduxForm({ form: "logIn", validate })(LogInForm);
