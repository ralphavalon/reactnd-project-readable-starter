import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryBox extends Component {
    render() {
        const { name, number_of_posts } = this.props;
        return (
            <div className="col-lg-3 col-md-6" key={name}>
                <div className={"panel " + (name ? 'panel-primary' : 'panel-green')}>
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-xs-3">
                                <i className="fa fa-comment fa-5x"></i>
                            </div>
                            <div className="col-xs-9 text-right">
                                <div className="huge">{number_of_posts}</div>
                                <div>Posts</div>
                            </div>
                        </div>
                    </div>
                    {name ? <Link to={`/category/${name}`}>
                        <div className="panel-footer">
                            <span className="pull-left">{name}</span>
                            <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                            <div className="clearfix"></div>
                        </div>
                    </Link> : <Link to="/">
                            <div className="panel-footer">
                                <span className="pull-left">All categories</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </Link>}
                </div>
            </div>
        );
    }
}

export default CategoryBox;