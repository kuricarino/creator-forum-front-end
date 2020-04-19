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
            console.log(document.getElementById(`${this.props.uploadId}`).value);
            FeedbackApi.feedbackCreate({
                body: document.getElementById(`${this.props.uploadId}`).value,
                upload: this.props.uploadId,
                user: this.props.loggedInUser
            })
            .then(res => {
                console.log('feedback posted on backend');
                this.props.updateFeedbackContainer();
            })
            this.setState({
                feedbackForm: ''
            })
        }
    

    render() {
        return (
            <div className="container">
                <div className="field">
                    <div className="control">
                        <textarea 
                            className="input has-text-black" 
                            name="body" id={this.props.uploadId} 
                            type="text" onChange={this.onChange} 
                            value={this.state.feedbackForm} 
                            defaultValue="" />
                    </div>
                </div>
                <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitFeedback}>Give Feedback</button>
            </div>
        )
    }
}

export default FeedbackForm;