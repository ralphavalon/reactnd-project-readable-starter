import React, { Component } from 'react';
import Post from '../post';
import BoxHeader from '../boxHeader';
import sortBy from 'sort-by';

class PostBox extends Component {
    state = {
        orderField: '',
        posts: [{
            id: '8xf0y6ziyjabvozdd253nd',
            timestamp: 1467166872634,
            title: 'Udacity is the best place to learn React',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'react',
            voteScore: 6,
            deleted: false,
            commentCount: 2
        },{
            id: '8xf0y6ziyjabvozdd253nd2',
            timestamp: 1525631551545,
            title: 'Udacity is awesome',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'redux',
            voteScore: 4,
            deleted: false,
            commentCount: 2
        },{
            id: '8xf0y6ziyjabvozdd253nd3',
            timestamp: 1467166872644,
            title: 'I really love Udacity',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'udacity',
            voteScore: 2,
            deleted: false,
            commentCount: 2
        },{
            id: '8xf0y6ziyjabvozdd253nd4',
            timestamp: 1467166872644,
            title: 'I really love Udacity',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'udacity',
            voteScore: 2,
            deleted: false,
            commentCount: 2
        },{
            id: '8xf0y6ziyjabvozdd253nd5',
            timestamp: 1525631551505,
            title: 'I really love Udacity',
            body: 'Everyone says so after all.',
            author: 'thingone',
            category: 'udacity',
            voteScore: 1,
            deleted: false,
            commentCount: 2
        },{
            id: '8xf0y6ziyjabvozdd253n23',
            timestamp: 1525631552545,
            title: 'I really love Udacity',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'udacity',
            voteScore: 3,
            deleted: false,
            commentCount: 2
        },{
            id: '8xf0y6ziyjabvozdd253nd6',
            timestamp: 1467166872644,
            title: 'I really love Udacity',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'udacity',
            voteScore: 2,
            deleted: false,
            commentCount: 2
        },{
            id: '8xf0y6ziyjabvozdd253nd7',
            timestamp: 1467166872644,
            title: 'I really love Udacity',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'udacity',
            voteScore: 2,
            deleted: false,
            commentCount: 2
        },{
            id: '8xf0y6ziyjabvozdd253nd8',
            timestamp: 1467166872644,
            title: 'I really love Udacity',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'udacity',
            voteScore: 2,
            deleted: false,
            commentCount: 2
        },{
            id: '8xf0y6ziyjabvozdd253nd9',
            timestamp: 1467166872644,
            title: 'I really love Udacity',
            body: 'Everyone says so after all.',
            author: 'thingtwo',
            category: 'udacity',
            voteScore: 2,
            deleted: false,
            commentCount: 2
        }]
    }

    onOrderClick = (field) => {
        this.setState({ orderField: field })
    }

    render() {
        const { orderField, posts } = this.state;
        const { category } = this.props;
        let showingPosts

        if (orderField) {
            showingPosts = posts.sort(sortBy(orderField));
        } else {
            showingPosts = posts
        }

        if (category) {
            showingPosts = showingPosts.filter((post) => post.category === category);
        }

        const orderBy = [{
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
                <BoxHeader title="Posts" orderBy={orderBy} onOrderClick={this.onOrderClick} />

                <div className="panel-body">
                    <ul className="chat">
                        {showingPosts.map((post) => (
                            <Post
                                id={post.id}
                                key={post.id}
                                author={post.author}
                                title={post.title}
                                category={post.category}
                                voteScore={post.voteScore}
                                deleted={post.deleted}
                                createdAt={post.timestamp} />
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

export default PostBox;