import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import Category from './pages/Category';
import PostPage from './pages/PostPage';
import Header from './pages/components/header';
import Sidebar from './pages/components/sidebar';
import './App.css';
import AllCategories from './pages/AllCategories';
import NewPostPage from './pages/NewPostPage';
import { loadInitialData, loadCategories } from './actions';

class App extends Component {
  componentDidMount() {
    const { loadPostsData, loadCategoriesData } = this.props;
    loadPostsData();
    loadCategoriesData();
  }

  render() {
    return (
      <div id="wrapper">
        <nav className="navbar navbar-default navbar-static-top" style={{ marginBottom: 0 }}>
          <Header />
          <Sidebar />
        </nav>

        <div id="page-wrapper">
          <Route exact path="/" render={() => (
            <AllCategories />
          )} />
          <Route exact path='/readable/post/new' component={NewPostPage} />
          <Route exact path='/readable/post/edit/:post_id' component={NewPostPage} />
          <Route exact path='/:category' component={Category} />
          <Route exact path='/:category/:post_id' component={PostPage} />
          
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loadPostsData: () => dispatch(loadInitialData()),
      loadCategoriesData: () => dispatch(loadCategories())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
