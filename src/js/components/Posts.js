import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CreateBlogPost from "./CreateBlogPost";
import { fetchPosts, createNewPost, deletePost } from "../actions";

class Posts extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) this.props.fetchPosts();
  }

  renderAdmin(post) {
    if (this.props.currentUserId === post.userId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/posts/editPost/${post.id}`}>
            EDIT
          </Link>
          <Link
            className="ui button negative"
            to={`/posts/deletePost/${post.id}`}>
            DELETE
          </Link>
          {/* {this.editPost() && <CreateBlogPost  />} */}
        </div>
      );
    }
  }

  // {this.renderAdmin(post)} goes where it is so that semantic ui gave the div proper styles
  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <div key={`${post.id}`} className="item container">
          {this.renderAdmin(post)}
          <h5 className="header  content">
            {post.title}
            <p className="description">{post.post}</p>
          </h5>
        </div>
      );
    });
  }

  // has to be an arrow function!!!
  onSubmit = formValues => {
    // console.log(formValues);
    this.props.createNewPost({
      ...formValues,
      userId: this.props.currentUserId
    });
    
  };

  render() {
    return (
      <div>
        <div className="container">
          {this.props.isLoggedIn ? (
            <CreateBlogPost
              form="createBlogPostForm"
              onSubmit={this.onSubmit}
            />
          ) : (
            <div>not authorized</div>
          )}
        </div>

        <div className="ui celled list">{this.renderPosts()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    currentUserId: state.auth.currentUserId,
    posts: state.posts
  };
};
export default connect(
  mapStateToProps,
  { fetchPosts, createNewPost, deletePost }
)(Posts);
