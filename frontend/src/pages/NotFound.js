import React, { Component } from 'react';
import HeaderText from '../components/headerText';
import { Link } from 'react-router-dom';
import '../App.css';

class NotFound extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <HeaderText title={`Post Not Found`} />
                </div>

                <div className="row">
                    <span>Sorry, we couldn't find your post. You can click <Link to={`/`}>here</Link> to see all posts.</span>
                </div>
            </div>
        );
    }
}

export default NotFound;
