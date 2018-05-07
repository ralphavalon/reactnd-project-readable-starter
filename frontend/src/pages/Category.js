import React, { Component } from 'react';
import HeaderText from '../components/headerText';
import CategoryBoxes from '../components/categoryBoxes';
import PostBox from '../components/postBox';
import Header from './components/header';
import Sidebar from './components/sidebar';
import '../App.css';

class Category extends Component {
  render() {
    const { title } = this.props
    return (
      <div id="wrapper">
        <nav className="navbar navbar-default navbar-static-top" style={{ marginBottom: 0 }}>
          <Header />
          <Sidebar />
        </nav>

        <div id="page-wrapper">
          <div className="row">
            <HeaderText title={`Category: ${title}`} />
          </div>

          <div className="row">
            <CategoryBoxes />
          </div>

          <div className="row">
            <PostBox category={title} />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
