import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { fetchPost, deletePost } from "../actions";
import history from "../../history";

class DeletePost extends Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deletePost(id)}
          className="ui button negative"
        >
          DELETE
        </button>
        <Link to="/posts" className="ui button">
          CANCEL
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.postToDelete) {
      return "Are you sure you want to delete this post?";
    }
    return `Are you sure you want to delete post with title: ${this.props.postToDelete.title} `;
  }

  render() {
    if (this.props.isLoggedIn) {
      return (
        <Modal
          title={"Delete post"}
          onDismiss={() => history.push("/posts")}
          renderContent={this.renderContent()}
          renderActions={this.renderActions()}
        />
      );
    } else {
      return <div>Not Authorized...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    postToDelete: state.posts.find(
      post => post.id === Number(ownProps.match.params.id)
    ),
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchPost, deletePost }
)(DeletePost);
