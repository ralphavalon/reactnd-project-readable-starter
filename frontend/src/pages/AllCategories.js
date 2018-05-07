import React, { Component } from 'react';
import HeaderText from '../components/headerText';
import CategoryBoxes from '../components/categoryBoxes';
import PostBox from '../components/postBox';
import '../App.css';

class AllCategories extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <HeaderText title="Categories" />
                </div>

                <div className="row">
                    <CategoryBoxes />
                </div>

                <div className="row">
                    <PostBox />
                </div>
            </div>
        );
    }
}

export default AllCategories;
