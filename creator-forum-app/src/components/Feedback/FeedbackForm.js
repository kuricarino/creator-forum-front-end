import React from 'react';
import FeedbackApi from '../../api/FeedbackApi';

class FeedbackForm extends React.Component {
    state = {
        feedbackForm: ''
    }

    onChange = (event) => {
        this.setState({
            feedbackForm: event.target.value,
        })
    }

    submitFeedback = (event) => {
        event.preventDefault();
            FeedbackApi.feedbackCreate({
                body: document.getElementById(`${this.props.uploadId}`).value,
                upload: this.props.uploadId,
                user: this.props.loggedInUser
            })
            .then(res => {
                this.props.updateFeedbackContainer();
            })
            this.setState({
                feedbackForm: ''
            })
        }
    
    render() {
        if (this.props.feedback.user === this.props.loggedInUser) {
            return null;
        }
        return (
            <div className="container">
                <div className="field">
                    <div className="control">
                        <textarea 
                            className="input has-text-black" 
                            name="body" id={this.props.uploadId} 
                            type="text" onChange={this.onChange} 
                            value={this.state.feedbackForm} 
                        />
                    </div>
                </div>
                <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitFeedback}>Give Feedback</button>
            </div>
        )
    }
}

export default FeedbackForm;