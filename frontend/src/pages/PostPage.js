import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotFound from './NotFound';
import HeaderText from '../components/headerText';
import CommentBox from '../components/commentBox';
import PostDetailBox from '../components/postDetailBox';
import { loadInitialData, upvotePost, downvotePost } from '../actions';
import '../App.css';

class PostPage extends Component {

    componentDidMount() {
        loadInitialData();
    }

    render() {
        const { post_id } = this.props.match.params;
        const { posts, onUpvotePost, onDownvotePost } = this.props;
        const post = posts.find(function (post) { return post.id === post_id; });

        if (!post) return <NotFound />;

        return (
            <div>
                <div className="row">
                    <HeaderText title={`Post: ${post.title}`} />
                </div>

                <div className="row">
                    <PostDetailBox
                        post={post}
                        onUpvotePost={onUpvotePost}
                        onDownvotePost={onDownvotePost}
                    />
                    <CommentBox post={post_id} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ category, post }) => ({
    categories: category.categories,
    posts: post.posts
});

const mapDispatchToProps = (dispatch) => {
    return {
        onUpvotePost: (data) => dispatch(upvotePost(data)),
        onDownvotePost: (data) => dispatch(downvotePost(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);
