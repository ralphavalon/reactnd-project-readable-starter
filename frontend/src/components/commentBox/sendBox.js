import React, { Component } from 'react';
import serializeForm from 'form-serialize';

class SendBox extends Component {

    state = {
        author: '',
        body: ''
    }

    render() {
        const { post, onSendComment, selectedComment } = this.props;
        let { author, body } = this.state;

        if(!!selectedComment && !author) {
            author = selectedComment.author;
        }
        if(!!selectedComment && !body) {
            body = selectedComment.body;
        }

        return (<form onSubmit={(e) => {
            e.preventDefault();
            const comment = serializeForm(e.target, { hash: true });
            onSendComment(!!selectedComment ? {
                ...selectedComment,
                ...comment
            } : comment, post);
            this.setState({author: '', body: ''})
            e.target.reset();
        }} className="input-group">
            <input id="btn-input" type="text" name="author" className="form-control input-sm comment-header" placeholder="Type your username here..." value={author} onChange={(e) => this.setState({author: e.target.value})} />
            <input id="btn-input" type="text" name="body" className="form-control input-sm comment-body" placeholder="Type your message here..." value={body} onChange={(e) => this.setState({body: e.target.value})}/>
            <span className="input-group-btn">
                <button className="btn btn-warning btn-sm" id="btn-chat">Send</button>
            </span>
        </form>);
    }
}

export default SendBox;