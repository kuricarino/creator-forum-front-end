import React from 'react';

class ProfileFeedback extends React.Component {
    state = {}

    render() {
        
        return (
            <div className="container">
                <div className="tile is-vertical">
                <div className="content">
                    <p className="has-text-grey-dark">
                        <strong>{this.props.feedback}</strong>
                    </p>
                </div>
                </div>
            </div>
        )
    }
}

export default ProfileFeedback;