import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BoxHeader from '../boxHeader';
import Comment from '../comment';
import { removePost } from '../../actions';

class PostDetailBox extends Component {

    render() {
        let { post } = this.props;
        const { posts, onUpvotePost, onDownvotePost, onRemovePost, history } = this.props;

        post = posts.find(function (p) { return p.id === post.id; });

        return (
            <div className="panel panel-default">
                <BoxHeader title={post.title} />

                <div className="panel-body">
                    <ul className="chat">
                        <Comment
                            id={post.id}
                            key={post.id}
                            author={post.author}
                            body={post.body}
                            category={post.category}
                            voteScore={post.voteScore}
                            deleted={post.deleted}
                            createdAt={post.timestamp}
                            onUpVote={() => onUpvotePost(post)}
                            onDownVote={() => onDownvotePost(post)}
                            onSelectComment={() => history.push(`/readable/post/edit/${post.id}`)}
                            onRemoveComment={() => { onRemovePost(post); history.push(`/`) } }
                            />
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ post }) => ({
    posts: post.posts
});

const mapDispatchToProps = (dispatch) => {
    return {
        onRemovePost: (data) => dispatch(removePost(data))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostDetailBox));