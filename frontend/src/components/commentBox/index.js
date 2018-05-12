import React, { Component } from 'react';
import Comment from '../comment';
import BoxHeader from '../boxHeader';
import sortBy from 'sort-by';
import serializeForm from 'form-serialize';

class CommentBox extends Component {
    state = {
        comments: [{
            id: '894tuq4ut84ut8v4t8wun89g',
            parentId: "8xf0y6ziyjabvozdd253nd",
            timestamp: 1468166872634,
            body: 'Hi there! I am a COMMENT.',
            author: 'thingtwo',
            voteScore: 6,
            deleted: false,
            parentDeleted: false
        }, {
            id: '8tu4bsun805n8un48ve89',
            parentId: "8xf0y6ziyjabvozdd253nd",
            timestamp: 1469479767190,
            body: 'Comments. Are. Cool.',
            author: 'thingone',
            voteScore: -5,
            deleted: false,
            parentDeleted: false
        }]
    }

    onUpVote = (comment) => {
        comment.voteScore++;
        this.setState({ comments: this.state.comments.filter((c) => c.id !== comment.id).concat([comment]) })
    }

    onDownVote = (comment) => {
        comment.voteScore--;
        this.setState({ comments: this.state.comments.filter((c) => c.id !== comment.id).concat([comment]) })
    }

    addComment = (e) => {
        e.preventDefault();
        const comment = serializeForm(e.target, { hash: true });
        comment.id = Math.random() * 1000;
        comment.timestamp = Number(new Date());
        comment.parentId = "8xf0y6ziyjabvozdd253nd";
        comment.voteScore = 0;
        this.setState({ comments: this.state.comments.concat([comment]) })
    }

    render() {
        const { comments } = this.state;
        const { post } = this.props;

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
                    <form onSubmit={this.addComment} className="input-group">
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

export default CommentBox;