import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <nav className="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">Udacity - Readable</a>
          </div>

          <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
              <ul className="nav" id="side-menu">
                <li className="sidebar-search">
                  <div className="input-group custom-search-form">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>

                </li>
                <li>
                  <a href="index.html"><i className="fa fa-comment fa-fw"></i> Categories</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id="page-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Categories</h1>
            </div>

          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <div className="row">
                    <div className="col-xs-3">
                      <i className="fa fa-comment fa-5x"></i>
                    </div>
                    <div className="col-xs-9 text-right">
                      <div className="huge">26</div>
                      <div>Posts</div>
                    </div>
                  </div>
                </div>
                <a href="#">
                  <div className="panel-footer">
                    <span className="pull-left">React</span>
                    <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                    <div className="clearfix"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="chat-panel panel panel-default">
              <div className="panel-heading">
                <i className="fa fa-comment fa-fw"></i> Posts
                        <div className="btn-group pull-right">
                  <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-chevron-down"></i>
                  </button>
                  <ul className="dropdown-menu slidedown">
                    <li>
                      <a href="#">
                        <i className="fa fa-refresh fa-fw"></i> Refresh
                                    </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-check-circle fa-fw"></i> Available
                                    </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-times fa-fw"></i> Busy
                                    </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-clock-o fa-fw"></i> Away
                                    </a>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <a href="#">
                        <i className="fa fa-sign-out fa-fw"></i> Sign Out
                                    </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="panel-body">
                <ul className="chat">
                  <li className="left clearfix">
                    <span className="chat-img pull-left">
                      <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                    </span>
                    <div className="chat-body clearfix">
                      <div className="header">
                        <strong className="primary-font">Jack Sparrow</strong>
                        <small className="pull-right text-muted">
                          <i className="fa fa-chevron-up fa-fw"></i> 12
                                        </small>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                    </p>
                      <small className="pull-right text-muted">
                        <i className="fa fa-clock-o fa-fw"></i> 12 mins ago
                                    </small>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
