import React, { Component } from 'react';
import HeaderText from '../components/headerText';
import CommentBox from '../components/commentBox';
import '../App.css';

class PostPage extends Component {
  render() {
    const { path } = this.props.match.params;
    return (
      <div>
        <div className="row">
          <HeaderText title={`Post: ${path}`} />
        </div>

        <div className="row">
          <CommentBox post={path} />
        </div>
      </div>
    );
  }
}

export default PostPage;
