import React, { Component } from 'react';
import HeaderText from '../components/headerText';
import CategoryBoxes from '../components/categoryBoxes';
import PostBox from '../components/postBox';
import '../App.css';

class Category extends Component {
    render() {
        const { category } = this.props.match.params;
        return (
            <div>
                <div className="row">
                    <HeaderText title={`Category: ${category}`} />
                </div>

                <div className="row">
                    <CategoryBoxes />
                </div>

                <div className="row">
                    <PostBox category={category} />
                </div>
            </div>
        );
    }
}

export default Category;
