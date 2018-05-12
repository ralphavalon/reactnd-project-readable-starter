import React, { Component } from 'react';
import moment from 'moment';

class Comment extends Component {
    render() {
        const { id, author, body, category, voteScore, createdAt } = this.props;

        return (
            <li className="left clearfix" >

                <span className="chat-img pull-left">
                    <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font">{body}</strong>
                        <small className="pull-right text-muted">
                            <div style={{"display": "inline-block"}}>
                            <i className="fa fa-chevron-up fa-fw">
                                <i className="fa fa-chevron-down fa-fw"></i>
                            </i>
                            </div>
                            <span>{voteScore}</span>
                        </small>
                    </div>
                    <p>{author}
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