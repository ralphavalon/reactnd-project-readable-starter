import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';
import serializeForm from 'form-serialize';
import Comment from '../comment';
import BoxHeader from '../boxHeader';
import { addComment, upvoteComment, downvoteComment, removeComment } from '../../actions';

class CommentBox extends Component {

    render() {
        const { comments, post, onNewComment, onDownvoteComment, onUpvoteComment, onRemoveComment } = this.props;

        let showingComments = comments.sort(sortBy('timestamp'));

        if (post) {
            showingComments = showingComments.filter((comment) => comment.parentId === post);
        }

        return (
            <div className="chat-panel panel panel-default">
                <BoxHeader title="Comments" />

                <div className="panel-body">
                    <ul className="chat">
                        {showingComments.map((comment) => (
                            <Comment
                                id={comment.id}
                                key={comment.id}
                                author={comment.author}
                                body={comment.body}
                                category={comment.category}
                                voteScore={comment.voteScore}
                                deleted={comment.deleted}
                                createdAt={comment.timestamp}
                                onUpVote={() => onUpvoteComment(comment)}
                                onDownVote={() => onDownvoteComment(comment)}
                                onRemoveComment={() => onRemoveComment(comment)} />
                        ))}
                    </ul>
                </div>

                <div className="panel-footer">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const comment = serializeForm(e.target, { hash: true });
                        onNewComment(comment, post);
                        e.target.reset();
                    }} className="input-group">
                        <input id="btn-input" type="text" name="author" className="form-control input-sm comment-header" placeholder="Type your username here..." />
                        <input id="btn-input" type="text" name="body" className="form-control input-sm comment-body" placeholder="Type your message here..." />
                        <span className="input-group-btn">
                            <button className="btn btn-warning btn-sm" id="btn-chat">
                                Send
                                </button>
                        </span>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ comment }) => ({
    comments: comment.comments
});

const mapDispatchToProps = (dispatch) => {
    return {
        onNewComment: (comment, postId) => dispatch(addComment(comment, postId)),
        onUpvoteComment: (data) => dispatch(upvoteComment(data)),
        onDownvoteComment: (data) => dispatch(downvoteComment(data)),
        onRemoveComment: (data) => dispatch(removeComment(data))
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentBox);