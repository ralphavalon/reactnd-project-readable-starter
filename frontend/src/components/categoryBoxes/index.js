import React, { Component } from 'react';
import CategoryBox from '../categoryBox';

class CategoryBoxes extends Component {
    render() {
        return (
            <div>
                <CategoryBox name="React" number_of_posts="26" />
            </div>
        );
    }
}

export default CategoryBoxes;