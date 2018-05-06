import React, { Component } from 'react';
import Posts from '../posts';
import BoxHeader from '../boxHeader';

class PostBox extends Component {
    render() {
        const orderBy = [{
            "text": "Category",
            "value": "category"
        }, {
            "text": "Most recent",
            "value": "createdAt"
        }];
        return (
            <div className="chat-panel panel panel-default">
                <BoxHeader title="Posts" orderBy={orderBy} />

                <div className="panel-body">
                    <Posts />
                </div>
            </div>
        );
    }
}

export default PostBox;