import React from 'react';
import FeedbackApi from '../../api/FeedbackApi';

class FeedbackDeleteMessage extends React.Component {

    onClose = (event) => {
        this.props.onClose && this.props.onClose(event);
    };

    confirmDelete = (event) => {
        console.log(`upload deleted`);
        event.preventDefault();

        FeedbackApi.feedbackDelete(this.props.feedback)
        .then(res => {
            this.props.updateFeedbackContainer();
            this.onClose();
        })
    }

    render() {
        if (!this.props.showDeleteState) {
            return null;
        }

        return (
            <article className="message is-normal is-danger">
                <div className="message-header">
                    <p className="has-text-white">
                    Are you sure you want to delete your feedback?
                    </p>
                    {/* <button className="delete is-small" onClick={() => this.onClose()} aria-label="delete"></button> */}
                </div>
                <div className="message-body">
                    {/* <span className="icon is-medium has-text-black" onClick={this.confirmDelete} >
                        <i className="fas fa-thumbs-up fa-lg"></i>
                    </span>
                    <span className="icon is-medium has-text-black" onClick={() => this.onClose()} >
                        <i className="fas fa-thumbs-down fa-lg"></i>
                    </span> */}
                    <span className="icon is-medium has-text-black" onClick={this.confirmDelete} >
                        <i className="fas fa-check fa-lg"></i>
                    </span>
                    <span className="icon is-medium has-text-black" onClick={() => this.onClose()} >
                        <i className="fas fa-times fa-lg"></i>
                    </span>
                </div>
            </article>
        )
    }

}

export default FeedbackDeleteMessage;