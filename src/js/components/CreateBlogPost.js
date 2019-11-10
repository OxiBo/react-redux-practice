import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";


class CreateBlogPost extends Component {
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
    name,
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
        <label htmlFor={name}>{label}</label>
        <input
          {...input}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };


  renderTextarea = ({
    input,
    meta,
    label,
    name,
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
        <label htmlFor={name}>{label}</label>
        <textarea
          {...input}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // console.log(formValues);
    this.props.onSubmit(formValues);
    this.props.reset(); // to remove entered values when form is submitted
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
          name="title"
          component={this.renderInput}
          placeholder="Title"
          label="Title"
          type="text"
        />

          {/* <label htmlFor="post" className="ui fields">
           What is on your mind?
          </label> */}
          
            <Field name="post" component={this.renderTextarea}  label=" What is on your mind?"/>
            
        
      

        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    // run if the user did not enter post title
    errors.title = "You must enter post title";
  }
  
  if(!formValues.post){
    errors.post = "Do not leave your post empty"
  }

  // console.log(errors);
  return errors;
};

export default reduxForm({ form: "blogPostForm", validate })(CreateBlogPost);
