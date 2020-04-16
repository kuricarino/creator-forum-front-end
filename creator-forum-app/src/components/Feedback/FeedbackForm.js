import React from 'react';
import FeedbackApi from '../../api/FeedbackApi';

class FeedbackForm extends React.Component {

    // field validation

    submitFeedback = (event) => {
        console.log('feedback posted');
        event.preventDefault();
        // if (this.validateFields()) {
            FeedbackApi.feedbackCreate(this.props.upload._id, {
                body: document.getElementById('body').value,
                upload: this.props.upload._id,
                user: this.props.loggedInUser
            })
            .then(res => {
                // from Upload Container which will re-render container to include new upload
                this.props.updateFeedbackContainer();
                // this.props.closeUpdateForm && this.props.closeUpdateForm(event);
            })
        // }
    }

    render() {
        return (
            <div className="container">
                <div className="field">
                    <div className="control">
                        <textarea className="input has-text-black" name="body" id="body" type="text" defaultValue="" />
                    </div>
                </div>
                <button className="button is-rounded is-link is-outlined" id="submit-button" onClick={this.submitFeedback}>Give Feedback</button>
            </div>
        )
    }
}

export default FeedbackForm;