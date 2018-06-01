import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoxHeader from '../boxHeader';
import Comment from '../comment';
import { upvotePost, downvotePost } from '../../actions';

class PostDetailBox extends Component {

    render() {
        const { post, onUpvotePost, onDownvotePost } = this.props;

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
                            onDownVote={() => onDownvotePost(post)} />
                    </ul>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpvotePost: (data) => dispatch(upvotePost(data)),
        onDownvotePost: (data) => dispatch(downvotePost(data))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(PostDetailBox);