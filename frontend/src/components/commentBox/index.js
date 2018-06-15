import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';
import Comment from '../comment';
import BoxHeader from '../boxHeader';
import { addComment, getComments, upvoteComment, downvoteComment, updateComment, removeComment } from '../../actions';
import SendBox from './sendBox';

class CommentBox extends Component {

    componentDidMount() {
        const { post, getComments } = this.props;
        getComments(post);
    }

    selectComment = (comment) => {
        this.setState({ selectedComment: comment });
    }

    state = {
        selectedComment: null
    }

    render() {
        const { comments, post, onNewComment, onDownvoteComment, onUpvoteComment, onEditComment, onRemoveComment } = this.props;
        const { selectedComment } = this.state;
        const onSendComment = !!selectedComment ? onEditComment : onNewComment;

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
                                onSelectComment={() => this.selectComment(comment)}
                                onRemoveComment={() => onRemoveComment(comment)} />
                        ))}
                    </ul>
                </div>

                <div className="panel-footer">
                    <SendBox post={post} onSendComment={(comment, post) => { onSendComment(comment, post); this.setState({selectedComment: null}) } } selectedComment={selectedComment} />
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
        onEditComment: (comment, postId) => dispatch(updateComment(comment, postId)),
        onUpvoteComment: (data) => dispatch(upvoteComment(data)),
        onDownvoteComment: (data) => dispatch(downvoteComment(data)),
        onRemoveComment: (data) => dispatch(removeComment(data)),
        getComments: (data) => dispatch(getComments(data))
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentBox);