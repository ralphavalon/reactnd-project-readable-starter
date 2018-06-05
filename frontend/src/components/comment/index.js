import React, { Component } from 'react';
import moment from 'moment';
import VoteScore from '../voteScore';

class Comment extends Component {
    render() {
        const { author, body, voteScore, createdAt, onUpVote, onDownVote, onSelectComment, onRemoveComment } = this.props;

        return (
            <li className="left clearfix" >
                <span className="author-area text-center chat-img pull-left">
                    <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                    <p className="author">{author}
                    </p>
                </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font" style={{"display": "inline-block"}}></strong>
                        <VoteScore voteScore={voteScore} onUpVote={onUpVote} onDownVote={onDownVote} />
                    </div>

                    <p>{body}
                    </p>
                    <p className="options">
                        <a className="link" onClick={onSelectComment}>[Edit]</a> - <a className="link" onClick={onRemoveComment}>[Delete]</a>
                    </p>
                    <small className="pull-right text-muted">
                        <i className="fa fa-clock-o fa-fw"></i> {moment(createdAt).fromNow()}
                    </small>
                </div>

            </li>

        );
    }
}

export default Comment;