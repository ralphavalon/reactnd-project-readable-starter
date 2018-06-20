import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    state = {
        query: '',
        postsFound: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })

        const { posts } = this.props;

        if (!!query.trim()) {
            this.setState({ postsFound: posts.filter(post => post.title.toLowerCase().includes(query.trim().toLowerCase())) });
        } else {
            this.setState({ postsFound: [] });
        }
    }

    render() {
        const { query, postsFound } = this.state;

        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="sidebar-search">
                            <div className="input-group custom-search-form">
                                <input type="text" className="form-control" placeholder="Search posts..." value={query} onChange={(event) => this.updateQuery(event.target.value)} />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                            </div>
                        </li>
                        {
                            postsFound.map((post) =>
                                <li key={post.id}>
                                    <Link to={`/${post.category}/${post.id}`}>
                                        <i className="fa fa-comment fa-fw"></i> {post.title}
                                    </Link>
                                </li>)
                        }

                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ post }) => ({
    posts: post.posts
});

export default connect(
    mapStateToProps
)(Sidebar);
