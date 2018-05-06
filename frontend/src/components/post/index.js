import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { author, title, category, voteScore, createdAt } = this.props;

        return (
            <li className="left clearfix" >
                <span className="chat-img pull-left">
                    <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className="primary-font">[{category}] - {title}</strong>
                        <small className="pull-right text-muted">
                            <i className="fa fa-chevron-up fa-fw"></i> {voteScore}
                        </small>
                    </div>
                    <p>
                        Created by {author}
                    </p>
                    <small className="pull-right text-muted">
                        <i className="fa fa-clock-o fa-fw"></i> {createdAt}
                    </small>
                </div>
            </li>
        );
    }
}

export default Post;