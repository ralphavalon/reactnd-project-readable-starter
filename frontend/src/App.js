import React, { Component } from 'react';
import HeaderText from './components/headerText';
import CategoryBoxes from './components/categoryBoxes';
import PostBox from './components/postBox';
import Category from './pages/Category';
import Header from './pages/components/header';
import Sidebar from './pages/components/sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <nav className="navbar navbar-default navbar-static-top" style={{ marginBottom: 0 }}>
          <Header />
          <Sidebar />
        </nav>

        <div id="page-wrapper">
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
      </div>
    );
  }
}

export default App;
