import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderText from '../components/headerText';
import NewPostBox from '../components/newPostBox';
import '../App.css';

class NewPostPage extends Component {
  render() {
    const { post_id } = this.props.match.params;
    const { posts } = this.props;
    const post = posts.find(function (post) { return post.id === post_id; });
    const headerText = !!post ? "Edit post" : "New post";
    return (
      <div>
        <div className="row">
          <HeaderText title={headerText} />
        </div>

        <div className="row">
          <div className="col-lg-6">
            <NewPostBox selectedPost={post} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ post }) => ({
  posts: post.posts
});

export default connect(
  mapStateToProps
)(NewPostPage);
