import React, { Component } from 'react';

class BoxHeader extends Component {
    render() {
        const { title, orderBy } = this.props;
        return (
            <div className="panel-heading">
                <i className="fa fa-comment fa-fw"></i> {title}
                    <div className="pull-right">
                    <div className="btn-group">
                        <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                            Order by
                                        <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu pull-right" role="menu">
                            {orderBy.map((order) => (
                                <li key={order.value}><a href="#">{order.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoxHeader;