import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import sortBy from 'sort-by';
import Post from '../post';
import BoxHeader from '../boxHeader';
import { upvotePost, downvotePost, removePost } from '../../actions';

class PostBox extends Component {
    state = {
        orderField: ''
    }

    onOrderClick = (field) => {
        this.setState({ orderField: field })
    }

    render() {
        const { orderField } = this.state;
        const { category, posts, onUpvotePost, onDownvotePost, onRemovePost, history } = this.props;
        let showingPosts

        if (orderField) {
            showingPosts = posts.sort(sortBy(orderField));
        } else {
            showingPosts = posts.sort(sortBy('-timestamp'));
        }

        if (category) {
            showingPosts = showingPosts.filter((post) => post.category === category);
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
                <BoxHeader title="Posts" orderOptions={orderOptions} selectedOrder={orderField} onOrderClick={this.onOrderClick} />

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
                                commentCount={post.commentCount}
                                deleted={post.deleted}
                                createdAt={post.timestamp}
                                onUpVote={() => onUpvotePost(post)}
                                onDownVote={() => onDownvotePost(post)}
                                onSelectComment={() => history.push(`/readable/post/edit/${post.id}`)}
                                onRemoveComment={() => { onRemovePost(post); history.push(`/`) } }
                                />
                        ))}
                    </ul>
                </div>

                <div className="panel-footer">
                    <div className="row">
                        <Link to={`/readable/post/new`}>
                            <div className="add pull-right">
                                <i className="fa fa-plus-circle fa-5x"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ post }) => ({
    posts: post.posts
});

const mapDispatchToProps = (dispatch) => {
    return {
        onUpvotePost: (data) => dispatch(upvotePost(data)),
        onDownvotePost: (data) => dispatch(downvotePost(data)),
        onRemovePost: (data) => dispatch(removePost(data))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(PostBox));