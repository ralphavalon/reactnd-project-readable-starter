import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryBox from '../categoryBox';

class CategoryBoxes extends Component {
    render() {
        const { categories = [], posts = [] } = this.props;
        return (
            <div>
                <CategoryBox number_of_posts={posts.length} key="all" />

                {categories.map((category) => (
                    <CategoryBox name={category.name} number_of_posts={posts.filter(p => p.category === category.name).length} key={category.name} />
                ))}

            </div>
        );
    }
}

const mapStateToProps = ({ category, post }) => ({
    categories: category.categories,
    posts: post.posts
});

export default connect(
    mapStateToProps
)(CategoryBoxes);