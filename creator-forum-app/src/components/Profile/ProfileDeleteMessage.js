import React from 'react';

class ProfileDeleteMessage extends React.Component {

    onClose = (event) => {
        this.props.onClose && this.props.onClose(event);
    };

    render() {
        if (!this.props.showProfileDeleteMessage) {
            return null;
        }
        return (

            <article className="message is-normal is-danger" id="delete-my-profile">
                <div className="message-header">
                    <p className="has-text-white">
                    Let me think about it!
                    </p>
                    <button className="delete is-small" onClick={() => this.onClose()} aria-label="delete"></button>
                </div>
                <div className="message-body">
                        <a className="has-text-black" onClick={this.props.userRequestToDeleteProfile}>Yes, I'm sure!</a>
                        <p>we'll miss you</p>
                </div>
            </article>
        )
    }
}

export default ProfileDeleteMessage;