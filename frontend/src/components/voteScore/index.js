import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VoteScore extends Component {
    render() {
        const { voteScore, onUpVote, onDownVote } = this.props;
        return (
            <small className="pull-right text-muted">
                <div style={{ "display": "inline-grid" }}>
                    <i className="fa fa-chevron-up fa-fw" onClick={onUpVote}></i>
                    <span className={"text-center vote-score " + (voteScore === 0 ? 'neutral-vote-score' : voteScore > 0 ? 'positive-vote-score' : 'negative-vote-score')}>{voteScore}</span>
                    <i className="fa fa-chevron-down fa-fw" onClick={onDownVote}></i>
                </div>

            </small>
        );
    }
}

VoteScore.propTypes = {
    voteScore: PropTypes.number,
    onUpVote: PropTypes.func.isRequired,
    onDownVote: PropTypes.func.isRequired
};

export default VoteScore;