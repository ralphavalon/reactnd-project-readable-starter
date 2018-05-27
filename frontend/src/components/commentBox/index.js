import React, { Component } from 'react';
import { connect } from 'react-redux';
import sortBy from 'sort-by';
import serializeForm from 'form-serialize';
import Comment from '../comment';
import BoxHeader from '../boxHeader';
import { addComment } from '../../actions';

class CommentBox extends Component {
    onUpVote = (comment) => {
        comment.voteScore++;
        this.setState({ comments: this.state.comments.filter((c) => c.id !== comment.id).concat([comment]) })
    }

    onDownVote = (comment) => {
        comment.voteScore--;
        this.setState({ comments: this.state.comments.filter((c) => c.id !== comment.id).concat([comment]) })
    }

    render() {
        const { comments, post, onNewComment } = this.props;

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
                                onUpVote={() => this.onUpVote(comment)}
                                onDownVote={() => this.onDownVote(comment)} />
                        ))}
                    </ul>
                </div>

                <div className="panel-footer">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const comment = serializeForm(e.target, { hash: true });
                        onNewComment(comment);
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
        onNewComment: (data) => dispatch(addComment(data))
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentBox);