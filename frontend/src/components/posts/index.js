import React, { Component } from 'react';
import Post from '../post';

class Posts extends Component {
    state = {
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
          }]
    }
    render() {
        const { posts } = this.state;
        return (
            <ul className="chat">
                {posts.map((post) => (
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
        );
    }
}

export default Posts;