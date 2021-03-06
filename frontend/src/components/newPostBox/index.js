import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import serializeForm from 'form-serialize';
import { addPost, updatePost } from '../../actions';
import { withRouter } from 'react-router-dom';

class NewPostBox extends Component {

    state = {
        author: this.props.selectedPost ? this.props.selectedPost.author : '',
        body: this.props.selectedPost ? this.props.selectedPost.body : '',
        category: this.props.selectedPost ? this.props.selectedPost.category : '',
        title: this.props.selectedPost ? this.props.selectedPost.title : '',
        missingCategory: this.props.selectedPost ? !this.props.selectedPost.category : true
    }

    render() {
        const { categories = [], onNewPost, onEditPost, selectedPost, history } = this.props;
        let { author, body, category, title, missingCategory } = this.state;
        const onSendPost = !!selectedPost ? onEditPost : onNewPost;

        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!category) {

                } else {
                    const post = serializeForm(e.target, { hash: true });
                    onSendPost(!!selectedPost ? {
                        ...selectedPost,
                        ...post
                    } : post);

                    e.target.reset();
                    history.push("/");
                }
            }}>

                <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" name="category" value={category} onChange={(e) => this.setState({ category: e.target.value, missingCategory: false })}>
                        {
                            categories.map((c) => (
                                <option value={c.name} key={c.name}>{c.name}</option>
                            ))
                        }
                    </select>
                    {missingCategory && <small className="red">You should select one category.</small>}
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name="author" placeholder="Your name" value={author} onChange={(e) => this.setState({ author: e.target.value })} />
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" name="title" placeholder="Title of the post" value={title} onChange={(e) => this.setState({ title: e.target.value })} />
                </div>

                <div className="form-group">
                    <label>Text/Body</label>
                    <textarea className="form-control" name="body" rows="3" placeholder="Text/body of the post" value={body} onChange={(e) => this.setState({ body: e.target.value })}></textarea>
                </div>

                <button type="submit" className="btn btn-primary">{!!selectedPost ? "Update" : "Create"}</button>

            </form>
        );
    }
}

const mapStateToProps = ({ category }) => ({
    categories: category.categories
});

const mapDispatchToProps = (dispatch) => {
    return {
        onNewPost: (data) => dispatch(addPost(data)),
        onEditPost: (data) => dispatch(updatePost(data))
    }
}

NewPostBox.propTypes = {
    onNewPost: PropTypes.func.isRequired,
    onEditPost: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPostBox));