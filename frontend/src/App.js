import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Category from './pages/Category';
import Header from './pages/components/header';
import Sidebar from './pages/components/sidebar';
import './App.css';
import AllCategories from './pages/AllCategories';

class App extends Component {
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
          <Route exact path='/category/:path' component={Category} />
          
        </div>
      </div>
    );
  }
}

export default App;
