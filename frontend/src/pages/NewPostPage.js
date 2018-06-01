import React, { Component } from 'react';
import HeaderText from '../components/headerText';
import NewPostBox from '../components/newPostBox';
import '../App.css';

class NewPostPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <HeaderText title="New post" />
        </div>

        <div className="row">
          <div className="col-lg-6">
            <NewPostBox />
          </div>
        </div>
      </div>
    );
  }
}

export default NewPostPage;
