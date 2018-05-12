import React, { Component } from 'react';
import Comment from '../comment';
import BoxHeader from '../boxHeader';
import sortBy from 'sort-by';

class CommentBox extends Component {
    state = {
        orderField: '',
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
        this.setState({comments: this.state.comments.filter((c) => c.id !== comment.id).concat([comment])})
    }

    onDownVote = (comment) => {
        comment.voteScore--;
        this.setState({comments: this.state.comments.filter((c) => c.id !== comment.id).concat([comment])})
    }

    onOrderClick = (field) => {
        this.setState({ orderField: field })
    }

    render() {
        const { orderField, comments } = this.state;
        const { post } = this.props;
        
        let showingComments = comments.sort(sortBy('timestamp'));

        if (post) {
            showingComments = showingComments.filter((comment) => comment.parentId === post);
        }

        const orderOptions = [{
            "text": "Category",
            "value": "category"
        }, {
            "text": "Vote Score - Asc",
            "value": "voteScore"
        }, {
            "text": "Vote Score - Desc",
            "value": "-voteScore"
        }, {
            "text": "Most recent",
            "value": "-timestamp"
        }];
        return (
            <div className="chat-panel panel panel-default">
                <BoxHeader title="Comments" orderOptions={orderOptions} selectedOrder={orderField} onOrderClick={this.onOrderClick} />

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
                    <div className="input-group">
                        <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                        <span className="input-group-btn">
                            <button className="btn btn-warning btn-sm" id="btn-chat">
                                Send
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentBox;