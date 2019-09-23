import React, { Component } from "react";
import CreateBlogPost from "./CreateBlogPost";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

class EditPost extends Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
      }

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
      console.log(this.props)
    if (!this.props.currentPost) {
      return <div>Loading...</div>;
    } else {
        console.log(this.props.currentPost.title)
      return (
        <div>
          <CreateBlogPost
            initialValues={{
              title: this.props.currentPost.title,
              post: this.props.currentPost.post
            }}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPost: state.posts.find(
      post => post.id === Number(ownProps.match.params.id)
    )
  };
};
export default connect(mapStateToProps, { fetchPost })(EditPost);
