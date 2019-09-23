import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class CreateForm extends Component {
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

  /* 
   <input
          {...input}
          placeholder={placeholder}
          required={required} // won't let user submit the form without filling this field
          type={type}
          id={id}
          autoComplete="off"
          min={min}
        /> */

  renderSelect = ({ input, meta, label, required, id, children }) => {
    // console.log(selectStuff);
    return (
      <div className="field">
        <label htmlFor="dropdown">{label}</label>
        <div className="ui">
          <select
            name={input.role}
            id={id}
            {...input}
            className="ui fluid normal dropdown"
          >
            {children.map(child => (
              <option value={child.props.value} key={child.props.value}>
                {child.props.children}
              </option>
            ))}
          </select>
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  /* 
 <select
            name={input.role}
            id={id}
            required={required} // won't let submit without this field
            {...input}
            className="ui fluid normal dropdown"
          >
            {children.map(child => (
              <option value={child.props.value} key={child.props.value}>
                {child.props.children}
              </option>
            ))}
          </select>
*/

  // renderRadio = ({input, meta, ...rest}) => {
  //   console.log(rest)
  //   return <input {...input} type="radio" />
  // }

  // renderRadioInput = (mainLabel, name, values) => {
  //   // console.log(stuff);
  //   // console.log(rest);
  //   // console.log(input);
  //   return (
  //     <div className="ui fields inline">
  //       <label htmlFor={name}>{mainLabel}</label>
  //       <div className="ui fields">
  //         {values.map(value => {
  //           return (
  //             <label key={value.data} className="radio checkbox">
  //               <Field
  //                 name={name}
  //                 component={this.renderRadio}
  //                 value={value.data}
  //                 type="radio"
  //               />
  //               {value.label}
  //             </label>
  //           );
  //         })}
  //       </div>
  //       {/* {children.map(child => {
  //         return (<label key={child.value} className="radio checkbox">
  //           <input  {...input} type="radio"  value={child.value}/>
  //           {child.label}
  //   </label>)
  //       })} */}
  //     </div>
  //   );
  // };

  // https://codeburst.io/forms-with-redux-form-v7-part-2-of-2-f44ffee4a34d
  renderRadio = props => {
    // console.log(props);
    const renderRadioButtons = (key, index) => {
      // console.log(key, index)
      return (
        <label
          className="ui field inline"
          key={`${index}`}
          htmlFor={`${props.input.name}-${index}`}
        >
          <Field
            id={`${props.input.name}-${index}`}
            component="input"
            name={props.input.name}
            type="radio"
            value={key}
            
          />

          {props.options[key]}
        </label>
      );
    };

    return (
      <div className="field">
        <label className="field">{props.label}</label>
        <div>
          {props.options && Object.keys(props.options).map(renderRadioButtons)}
        </div>
      </div>
    );
  };

  renderCheckbox = props => {
    return (
      <label className="ui fields">
        <input
          {...props.input}
          type="checkbox"
          checked={props.input.value}
          value={props.value}
        />
        {props.label}
      </label>
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
          name="login"
          component={this.renderInput}
          placeholder="Enter your login"
          label="Login"
          type="text"
        />

      <Field
          type="email"
          required
          id="email"
          placeholder="Enter your email"
          name="email"
          component={this.renderInput}
          label="Email"
        />

        <Field
          name="password"
          component={this.renderInput}
          placeholder="Enter your password"
          label="Password"
          type="password"
        />

        <Field
          name="name"
          component={this.renderInput}
          placeholder="Enter your name"
          label="Name"
          type="text"
        />
        {/* <Field
          name="surname"
          component={this.renderInput}
          placeholder="Enter your surname"
          label="Surname"
          type="text"
        /> */}
        <Field
          name="gender"
          label="Choose your gender"
          component={this.renderRadio}
          options={{
            male: "Male",
            female: "Female",
            notReveal: "Prefer not to say"
          }}
         
        />
        
        {/*
        <Field
          type="number"
          required
          id="age"
          placeholder="Enter your age"
          name="age"
          min="1"
          component={this.renderInput}
          label="Age"
        /> */}
        {/* <Field
          required
          id="dropdown"
          name="role"
          component={this.renderSelect}
          label="* Which option best describes your current role?"
        >
          <option value="">Select an option</option>
          <option value="student">Student</option>
          <option value="full-time-job">Full time job</option>
          <option value="full-time-learner">Full time learner</option>
          <option value="retired">Retired</option>
          <option value="prefer-not-say">Prefer not to say</option>
          <option value="other">Other</option>
        </Field> */}
        <Field
          name="useFrequency"
          label="How often do you use social networks?"
          component={this.renderRadio}
          options={{
            daily: "A few times per day",
            weekly: "A few times per week",
            monthly: "A few times per month",
            rarely: " A few times per year/rarely",
            never: "Never"
          }}
           // checked - the last one "never" will be checked by default; I don't understand why. I guess because "never" gets props.checked which is true last
        />
        <div className="ui fields">
          <label className="ui field">
            What do you use social networks for?
          </label>
          <div className="options">
            <Field
              name="purpose1"
              value="friends-intouch"
              component={this.renderCheckbox}
              label="To stay in touch with what my friends are doing"
            />
            <Field
              name="purpose2"
              value="current-events"
              component={this.renderCheckbox}
              label="To stay up-to-date with news and current events"
            />
            <Field
              name="purpose3"
              value="spare-time"
              component={this.renderCheckbox}
              label="To fill up spare time"
            />
            <Field
              name="purpose4"
              value="find-content"
              component={this.renderCheckbox}
              label="To find funny or entertaining content"
            />
            <Field
              type="checkbox"
              name="purpose5"
              value="networking-people"
              component={this.renderCheckbox}
              label="General networking with other people"
            />
          </div>
          </div>
          <div className="ui field">
            <label htmlFor="comments" className="ui fields">
              Share your ideas, comments, suggestions:
            </label>
            <div className="">
              <Field name="comments" component="textarea" id="comments" />
            </div>
          </div>
        
        {/* {[
            {
              "friends-intouch":
                "To stay in touch with what my friends are doing"
            },
            {
              "current-events":
                "To stay up-to-date with news and current events"
            },
            { "spare-time": "To fill up spare time" }
          ].map(checkbox => {
            return (
              <Field
                name="purpose"
                label={Object.values(checkbox)}
                component={this.renderCheckbox}
              />
            );
          })} */}
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    // run if the user did not enter your name
    errors.name = "You must enter your name";
  }
  if (!formValues.surname) {
    // run if the user did not enter your surname
    errors.surname = "You must enter your surname";
  }

  if (!formValues.email) {
    // run if the user did not enter your email
    errors.email = "You must enter your email";
  }

  if (!formValues.age) {
    // run if the user did not enter your age
    errors.age = "You must enter your age";
  }

  if (!formValues.role) {
    // run if the user did not enter your current role
    errors.role = "You must enter your current role";
  }

  // console.log(errors);
  return errors;
};

export default reduxForm({ form: "mainForm", validate })(CreateForm);
