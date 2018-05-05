import React, { Component } from 'react';
import Post from '../post';

class Posts extends Component {
    render() {
        return (
            <ul className="chat">
                <Post id="id"
                    author="Jack Sparrow"
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales."
                    category="name"
                    voteScore="2"
                    deleted="false"
                    createdAt="12 mins ago" />
            </ul>
        );
    }
}

export default Posts;