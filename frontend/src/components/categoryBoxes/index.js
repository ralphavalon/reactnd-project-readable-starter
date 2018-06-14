import React, { Component } from 'react';
import { connect } from 'react-redux';
import CategoryBox from '../categoryBox';

class CategoryBoxes extends Component {
    render() {
        const { categories = [] } = this.props;
        return (
            <div>
                <CategoryBox number_of_posts={categories.reduce((previousValue, category) => previousValue + (category.number_of_posts || 0), 0)} key="all" />

                {categories.map((category) => (
                    <CategoryBox name={category.name} number_of_posts={category.number_of_posts || 0} key={category.name} />
                ))}

            </div>
        );
    }
}

const mapStateToProps = ({ category }) => ({
    categories: category.categories
});

export default connect(
    mapStateToProps
)(CategoryBoxes);