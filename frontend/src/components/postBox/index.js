import React, { Component } from 'react';
import Posts from '../posts';
import BoxHeader from '../boxHeader';

class PostBox extends Component {
    render() {
        return (
            <div className="chat-panel panel panel-default">
                <BoxHeader title="Posts" />

                <div className="panel-body">
                    <Posts />
                </div>
            </div>
        );
    }
}

export default PostBox;