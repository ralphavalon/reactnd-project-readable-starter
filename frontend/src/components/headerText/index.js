import React, { Component } from 'react';

class HeaderText extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="col-lg-12">
                <h1 className="page-header">{title}</h1>
            </div>
        );
    }
}

export default HeaderText;
