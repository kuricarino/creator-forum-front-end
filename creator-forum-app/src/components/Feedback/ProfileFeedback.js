import React from 'react';

class ProfileFeedback extends React.Component {
    state = {}

    render() {
        
        return (
            <div className="container">
                <br/>
                <div className="tile is-vertical">
                <div className="content">
                    <p className="has-text-grey-dark">
                    <i className="far fa-comment" data-fa-transform="flip-h" aria-hidden="true"></i>
                        <strong> {this.props.feedback}</strong>
                    </p>
                </div>
                </div>
            </div>
        )
    }
}

export default ProfileFeedback;