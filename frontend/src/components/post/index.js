import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import VoteScore from '../voteScore';

class Post extends Component {
    render() {
        const { id, author, title, category, commentCount = 0, voteScore, createdAt, onUpVote, onDownVote, onSelectComment, onRemoveComment } = this.props;

        return (
            <li className="left clearfix" >

                <span className="author-area text-center chat-img pull-left">
                    <img src="/user.png" alt="User Avatar" className="img-circle img" />
                    <p className="author">{author}
                    </p>
                </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <Link to={`/${category}/${id}`} style={{ textDecoration: 'none' }}>
                            <strong className="primary-font">{title}</strong>
                        </Link>
                        <VoteScore voteScore={voteScore} onUpVote={onUpVote} onDownVote={onDownVote} />
                    </div>
                    <p><strong>Category:</strong> {category}
                    </p>
                    <p><strong>Comments:</strong> {commentCount}</p>
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

export default Post;