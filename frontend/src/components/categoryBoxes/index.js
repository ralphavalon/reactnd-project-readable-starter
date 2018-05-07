import React, { Component } from 'react';
import CategoryBox from '../categoryBox';

class CategoryBoxes extends Component {
    state = {
        categories: [{
            "name": "react",
            "number_of_posts": 26
        }]
    }

    render() {
        const { categories } = this.state;
        return (
            <div>
                <CategoryBox number_of_posts="26" key="all" />

                {categories.map((category) => (
                    <CategoryBox name={category.name} number_of_posts={category.number_of_posts} key={category.name}/>
                ))}
                
            </div>
        );
    }
}

export default CategoryBoxes;