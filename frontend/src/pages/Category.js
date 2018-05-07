import React, { Component } from 'react';
import HeaderText from '../components/headerText';
import CategoryBoxes from '../components/categoryBoxes';
import PostBox from '../components/postBox';
import '../App.css';

class Category extends Component {
  render() {
    const { path } = this.props.match.params;
    return (
      <div>
        <div className="row">
          <HeaderText title={`Category: ${path}`} />
        </div>

        <div className="row">
          <CategoryBoxes />
        </div>

        <div className="row">
          <PostBox category={path} />
        </div>
      </div>
    );
  }
}

export default Category;
