import React, { Component } from "react";
import CreateBlogPost from "./CreateBlogPost";
import { connect } from "react-redux";
import { fetchPosts, editPost } from "../actions";

class EditPost extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) this.props.fetchPosts()//(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(formValues);
    // console.log(this.props.match.params.id)
    this.props.editPost(this.props.match.params.id, formValues)
  };

  render() {
    // console.log(this.props);
    if (this.props.isLoggedIn) {
      if (!this.props.currentPost) {
        return <div>Loading...</div>;
      } else {
        // console.log(this.props.currentPost.title);
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
    } else {
      return (
        <div>not authorized
      
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentPost: state.posts.find(
      post => post.id === Number(ownProps.match.params.id)
    ),
    isLoggedIn: state.auth.isLoggedIn
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts, editPost }
)(EditPost);
