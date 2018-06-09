import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import VoteScore from '../voteScore';

class Post extends Component {
    render() {
        const { id, author, title, category, commentCount = 0, voteScore, createdAt, onUpVote, onDownVote } = this.props;

        return (
            <li className="left clearfix" >

                <span className="author-area text-center chat-img pull-left">
                    <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
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
                    <small className="pull-right text-muted">
                        <i className="fa fa-clock-o fa-fw"></i> {moment(createdAt).fromNow()}
                    </small>
                </div>

            </li>

        );
    }
}

export default Post;