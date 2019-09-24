import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CreateBlogPost from "./CreateBlogPost";
import { fetchPosts, createNewPost, deletePost } from "../actions";

class Posts extends Component {
  componentDidMount() {
    if(this.props.isLoggedIn) this.props.fetchPosts();
  }

  

  renderAdmin(post) {
    if (this.props.currentUserId === post.userId) {
      return (
        <div className="right floated content">
          <Link className="ui button primary" to={`/posts/editPost/${post.id}`}>
            EDIT
          </Link>
          <button className="ui button negative" onClick={() =>this.props.deletePost(post.id)}>DELETE</button>
          {/* {this.editPost() && <CreateBlogPost  />} */}
        </div>
      );
    }
  };

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <div key={`${post.id}`} className="item">
          <h5 className="ui header">{post.title}</h5>
          <p className="ui message">{post.post}</p>
          {this.renderAdmin(post)}
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
          {this.props.isLoggedIn && <CreateBlogPost initialValues={{title: "WTF??", post: "for real!"}} onSubmit={this.onSubmit} />}
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
