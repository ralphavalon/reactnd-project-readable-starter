import React, { Component } from 'react';
import { connect } from 'react-redux';
import serializeForm from 'form-serialize';

class NewPostBox extends Component {

    render() {
        const { categories = [] } = this.props;
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                const post = serializeForm(e.target, { hash: true });
                console.log(post);
                e.target.reset();
            }}>

                <div className="form-group">
                    <label>Category</label>
                    <select className="form-control" name="category">
                        {categories.map((category) => (
                            <option value={category.name} key={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" name="name" placeholder="Your name" />
                </div>

                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" name="title" placeholder="Title of the post" />
                </div>

                <div className="form-group">
                    <label>Text/Body</label>
                    <textarea className="form-control" name="body" rows="3" placeholder="Text/body of the post"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Create</button>

            </form>
        );
    }
}

const mapStateToProps = ({ category }) => ({
    categories: category.categories
});

export default connect(
    mapStateToProps
)(NewPostBox);